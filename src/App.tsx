import './App.css';
import { useEffect, useState } from 'react';
import { BookingSummary } from './components/BookingSummary';
import { MoviePicker } from './components/MoviePicker';
import { SeatLegend } from './components/SeatLegend';
import {
  createBooking,
  deleteBooking,
  loadBookings,
  saveBookingData,
} from './api/bookings';
import type { SeatBookings } from './interfaces/SeatBookings';
import Movie from './models/Movie';
import {
  createMovie,
  deleteMovie,
  loadMovies,
  updateMovie,
} from './api/movies';
import { SeatRow } from './components/SeatRow';
import type CustomerBooking from './interfaces/CustomerBooking';
import type { Row } from './interfaces/Row';
import type { PageType } from './interfaces/PageType';
import { MovieItem } from './components/MovieItem';
import type { MovieEntity } from './interfaces/MovieEntity';
import { AddMovie } from './components/AddMovie';
import type MovieBooking from './interfaces/MovieBooking';

function App() {
  const [selectedSeatsCount, setSelectedSeatsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // const initialSelectedSeats: Record<Row, number[]> = {
  //   a: [],
  //   b: [],
  //   c: [],
  //   d: [],
  //   e: [],
  //   f: [],
  // };
  const [selectedSeats, setSelectedSeats] = useState<Record<Row, number[]>>({
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
  });
  const [bookings, setBookings] = useState([] as SeatBookings);
  const [movies, setMovies] = useState(Array<Movie>);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
    {} as Movie,
  );
  const [currentPage, setCurrentPage] = useState<PageType>('booking');
  const [isLoading, setIsLoading] = useState(true);

  const resetStates = () => {
    setTotalPrice(0);
    setSelectedSeatsCount(0);
    setSelectedSeats((prevSeats) => ({
      ...prevSeats,
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      f: [],
    }));
  };

  const changeMovie = (movieId: string) => {
    const newSelectedMovie = movies.find((movie) => movie.id === movieId);

    if (newSelectedMovie != undefined) {
      setSelectedMovie(newSelectedMovie);
      resetStates();
    }
  };

  //Fetch bookings and movies from API, once on mount
  useEffect(() => {
    async function getBookingsData() {
      const fetchedBookings = await loadBookings();
      setBookings(fetchedBookings);
    }

    async function getMovieData() {
      const fetchedMovies: Array<Movie> = await loadMovies();
      setMovies(fetchedMovies);
      setSelectedMovie(fetchedMovies[0]);
    }

    //Imediately Invoked Function Expression
    (async () => {
      try {
        await getMovieData();
        await getBookingsData();
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const bookingsForSelectedMovie = bookings.find(
    (booking) => booking.id === selectedMovie?.id,
  );

  const onBookingSubmit = async (_: unknown, formData: FormData) => {
    let validInput = true;
    const result = {
      errors: {} as Record<string, string>,
      successMessage: '',
    };
    const nameRegex = /^[A-Za-zÅÄÖåäö]+([ -'][A-Za-zÅÄÖåäö]+)*$/;
    const inputName = formData.get('name') as string;

    if (inputName && !nameRegex.test(inputName)) {
      validInput = false;
      result.errors['name'] =
        'Must not be empty, include numbers or special characters';
    }

    const inputPhone = formData.get('phone') as string;

    const phoneRegex = /^(?:(?:\+|00)46|0)?7(?:[ -]?[0-9]{3}){2}[ -]?[0-9]{2}$/;

    if (inputPhone && !phoneRegex.test(inputPhone)) {
      validInput = false;
      result.errors['phone'] = 'Must be a swedish phone number format';
    }

    if (!selectedMovie) {
      result.errors['general'] = 'No selected movie';
      return result;
    }

    if (!validInput) return result;

    result.successMessage = 'Successfully booked the tickets!';

    const newBookingData = {} as Record<Row, CustomerBooking[]>;

    for (const row of Object.keys(selectedSeats) as Row[]) {
      if (
        bookingsForSelectedMovie === undefined ||
        selectedSeats[row].length == 0
      ) {
        continue;
      }

      const newCustomerBookings = selectedSeats[row].map(
        (seatNumber: number) => {
          return {
            seat: seatNumber,
            customer: { name: inputName, phone: inputPhone },
          } as CustomerBooking;
        },
      );

      newBookingData[row] =
        bookingsForSelectedMovie[row].concat(newCustomerBookings);
    }

    const isSuccess = await saveBookingData(selectedMovie.id, newBookingData);

    if (isSuccess) {
      setCurrentPage('thank-you');

      setBookings(
        bookings.map((movieBooking) => {
          if (movieBooking.id === selectedMovie.id) {
            return {
              ...movieBooking,
              ...newBookingData,
            };
          }
          return movieBooking;
        }),
      );
    }

    return result;
  };

  const toggleAdminPage = () => {
    setCurrentPage(currentPage == 'admin' ? 'booking' : 'admin');
  };

  if (currentPage === 'booking') {
    return (
      <>
        <button onClick={toggleAdminPage} className="btn admin-btn">
          TO ADMIN
        </button>
        {selectedMovie == undefined || bookingsForSelectedMovie == undefined ? (
          <h2>No movies to book at the moment</h2>
        ) : (
          <>
            <MoviePicker movies={movies} onChangeMovie={changeMovie} />
            <SeatLegend />
            <div className="container">
              <div className="screen"></div>
              <SeatRow
                row="a"
                rowBookings={bookingsForSelectedMovie['a'] ?? []}
                setSelectedSeatsCount={setSelectedSeatsCount}
                ticketPrice={selectedMovie?.price}
                currentSeatCount={selectedSeatsCount}
                setTotalPrice={setTotalPrice}
                setSelectedSeats={setSelectedSeats}
                rowSelection={selectedSeats['a']}
              />
              <SeatRow
                row="b"
                rowBookings={bookingsForSelectedMovie['b'] ?? []}
                setSelectedSeatsCount={setSelectedSeatsCount}
                ticketPrice={selectedMovie?.price}
                currentSeatCount={selectedSeatsCount}
                setTotalPrice={setTotalPrice}
                setSelectedSeats={setSelectedSeats}
                rowSelection={selectedSeats['b']}
              />
              <SeatRow
                row="c"
                rowBookings={bookingsForSelectedMovie['c'] ?? []}
                setSelectedSeatsCount={setSelectedSeatsCount}
                ticketPrice={selectedMovie?.price}
                currentSeatCount={selectedSeatsCount}
                setTotalPrice={setTotalPrice}
                setSelectedSeats={setSelectedSeats}
                rowSelection={selectedSeats['c']}
              />
              <SeatRow
                row="d"
                rowBookings={bookingsForSelectedMovie['d'] ?? []}
                setSelectedSeatsCount={setSelectedSeatsCount}
                ticketPrice={selectedMovie?.price}
                currentSeatCount={selectedSeatsCount}
                setTotalPrice={setTotalPrice}
                setSelectedSeats={setSelectedSeats}
                rowSelection={selectedSeats['d']}
              />
              <SeatRow
                row="e"
                rowBookings={bookingsForSelectedMovie['e'] ?? []}
                setSelectedSeatsCount={setSelectedSeatsCount}
                ticketPrice={selectedMovie?.price}
                currentSeatCount={selectedSeatsCount}
                setTotalPrice={setTotalPrice}
                setSelectedSeats={setSelectedSeats}
                rowSelection={selectedSeats['e']}
              />
              <SeatRow
                row="f"
                rowBookings={bookingsForSelectedMovie['f'] ?? []}
                setSelectedSeatsCount={setSelectedSeatsCount}
                ticketPrice={selectedMovie?.price}
                currentSeatCount={selectedSeatsCount}
                setTotalPrice={setTotalPrice}
                setSelectedSeats={setSelectedSeats}
                rowSelection={selectedSeats['f']}
              />
            </div>
            <BookingSummary
              selectedSeatsCount={selectedSeatsCount}
              totalPrice={totalPrice}
              onBooking={onBookingSubmit}
            />
          </>
        )}
      </>
    );
  }

  //THANK YOU PAGE
  const backToBooking = () => {
    setSelectedMovie(movies[0]);
    resetStates();
    setCurrentPage('booking');
  };

  if (currentPage === 'thank-you') {
    return (
      <>
        <h2>Thank you</h2>
        <p>
          Congratulations you successfully booked ticket(s) for:
          <span> {selectedMovie?.name}</span>
        </p>
        <button className="btn" onClick={backToBooking}>
          Back to booking
        </button>
      </>
    );
  }

  // ADMIN PAGE
  const handleDeleteMovie = async (movieId: string) => {
    //Delete from Movie useState and database
    setMovies((currentMovies) =>
      currentMovies.filter((movie) => movie.id != movieId),
    );
    const isMovieDeleted = await deleteMovie(movieId);

    if (selectedMovie?.id === movieId) {
      setSelectedMovie(movies.find((movie) => movie.id != movieId));
    }

    //Delete from Bookings useState and database
    setBookings((currentBookings) =>
      currentBookings.filter((booking) => booking.id != movieId),
    );
    const isBookingsDeleted = await deleteBooking(movieId);

    return isMovieDeleted && isBookingsDeleted;
  };

  const handleUpdateMovie = async (
    movieId: string,
    updatedData: Partial<MovieEntity>,
  ) => {
    const hasSavedToDatabase = await updateMovie(movieId, updatedData);

    if (!hasSavedToDatabase) {
      return false;
    }

    let useStateData;

    //filter out 'title' key and replace with 'name' key to match useState keys instead of data base keys
    if (updatedData.title) {
      const { title: _, ...filteredData } = updatedData;
      useStateData = {
        ...filteredData,
        name: updatedData.title,
      };
    } else {
      useStateData = {
        ...updatedData,
      };
    }

    //update useState
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id === movieId) {
          return {
            ...movie,
            ...useStateData,
          };
        }
        return movie;
      }),
    );

    if (movieId == selectedMovie?.id) {
      setSelectedMovie({ ...selectedMovie, ...useStateData });
    }

    return hasSavedToDatabase;
  };

  const handleAddMoviesubmit = async (_: unknown, formData: FormData) => {
    const movieTitle = formData.get('title') as string;
    const ticketPrice = formData.get('price') as string;

    const result = {
      errors: {} as Record<string, string>,
      fieldData: {
        title: movieTitle,
        price: ticketPrice,
      },
    };

    const isAlreadyExisting = movies.some(
      (movie) => movie.name.toLowerCase() == movieTitle.toLowerCase(),
    );

    if (isAlreadyExisting) {
      result.errors['title'] = 'This movie title already exists';

      return result;
    }

    const nextId =
      movies.reduce((max, movie) => {
        const id = Number(movie.id);
        return id > max ? id : max;
      }, 0) + 1;

    //POST to movie database
    await createMovie({
      id: nextId.toString(),
      title: movieTitle,
      price: Number(ticketPrice),
    });

    //update movies useState
    setMovies([
      ...movies,
      {
        id: nextId.toString(),
        name: movieTitle,
        price: Number(ticketPrice),
      },
    ]);

    //Create "empty" booking POST for created movie
    const newMovieBooking: MovieBooking = {
      id: nextId.toString(),
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      f: [],
    };
    await createBooking(newMovieBooking);

    //update booking useState
    setBookings([...bookings, newMovieBooking]);

    return result;
  };

  if (currentPage === 'admin') {
    return (
      <>
        <div className="column">
          <button onClick={toggleAdminPage} className="btn admin-btn">
            &#8592; BACK
          </button>
          <AddMovie onSubmit={handleAddMoviesubmit} />
        </div>
        <ul className="movie-list">
          {movies.map((movie: Movie) => (
            <MovieItem
              key={movie.id}
              movie={movie}
              onDeleteMovie={handleDeleteMovie}
              onSaveEditMovie={handleUpdateMovie}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default App;
