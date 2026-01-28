import './App.css';
import { useEffect, useState } from 'react';
import { BookingSummary } from './components/BookingSummary';
import { MoviePicker } from './components/MoviePicker';
import { SeatLegend } from './components/SeatLegend';
import { loadBookings } from './api/bookings';
import type { SeatBookings } from './interfaces/SeatBookings';
import Movie from './models/Movie';
import loadMovies from './api/movies';
import { SeatRow } from './components/SeatRow';

function App() {
  const [selectedSeatsCount, setSelectedSeatsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState({
    a: [] as number[],
    b: [] as number[],
    c: [] as number[],
    d: [] as number[],
    e: [] as number[],
    f: [] as number[],
  });
  const [bookings, setbookings] = useState([] as SeatBookings);
  const [movies, setMovies] = useState(Array<Movie>);
  const [selectedMovie, setSelectedMovie] = useState({} as Movie);

  const changeMovie = (movieId: string) => {
    const selectedMovie = movies.find((movie) => movie.id === movieId);

    if (selectedMovie != undefined) {
      setSelectedMovie(selectedMovie);
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
    }
  };

  const onBookingSubmit = (_: unknown, formData: FormData) => {
    let validInput = true;
    const result = {
      errors: {} as Record<string, string>,
      successMessage: undefined as string | undefined,
    };
    const nameRegex = /^[A-Za-zÅÄÖåäö]+([ -'][A-Za-zÅÄÖåäö]+)*$/;
    const name = formData.get('name') as string;

    if (name && !nameRegex.test(name)) {
      validInput = false;
      result.errors['name'] =
        'Must not be empty, include numbers or special characters';
    }

    const phone = formData.get('phone') as string;

    const phoneRegex =
      /^(?:(?:\+|00)46|0)?7(?:[ \-]?[0-9]{3}){2}[ \-]?[0-9]{2}$/;

    if (phone && !phoneRegex.test(phone)) {
      validInput = false;
      result.errors['phone'] = 'Must be a swedish phone number format';
    }

    if (validInput) {
      result.successMessage = 'Successfully booked the tickets!';
    }

    return result;
  };

  //Fetch bookings and movies from API, once on mount
  useEffect(() => {
    async function getBookingsData() {
      const fetchedBookings = await loadBookings();
      setbookings(fetchedBookings);
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
      }
    })();
  }, []);

  const bookingsForSelectedMovie = bookings.find(
    (booking) => booking.id === selectedMovie.id,
  );
  if (bookingsForSelectedMovie == undefined) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <MoviePicker movies={movies} onChangeMovie={changeMovie} />

      <SeatLegend />

      <div className="container">
        <div className="screen"></div>
        <SeatRow
          row="a"
          rowBookings={bookingsForSelectedMovie['a'] ?? []}
          setSelectedSeatsCount={setSelectedSeatsCount}
          ticketPrice={selectedMovie.price}
          currentSeatCount={selectedSeatsCount}
          setTotalPrice={setTotalPrice}
          setSelectedSeats={setSelectedSeats}
          rowSelection={selectedSeats['a']}
        />
        <SeatRow
          row="b"
          rowBookings={bookingsForSelectedMovie['b'] ?? []}
          setSelectedSeatsCount={setSelectedSeatsCount}
          ticketPrice={selectedMovie.price}
          currentSeatCount={selectedSeatsCount}
          setTotalPrice={setTotalPrice}
          setSelectedSeats={setSelectedSeats}
          rowSelection={selectedSeats['b']}
        />
        <SeatRow
          row="c"
          rowBookings={bookingsForSelectedMovie['c'] ?? []}
          setSelectedSeatsCount={setSelectedSeatsCount}
          ticketPrice={selectedMovie.price}
          currentSeatCount={selectedSeatsCount}
          setTotalPrice={setTotalPrice}
          setSelectedSeats={setSelectedSeats}
          rowSelection={selectedSeats['c']}
        />
        <SeatRow
          row="d"
          rowBookings={bookingsForSelectedMovie['d'] ?? []}
          setSelectedSeatsCount={setSelectedSeatsCount}
          ticketPrice={selectedMovie.price}
          currentSeatCount={selectedSeatsCount}
          setTotalPrice={setTotalPrice}
          setSelectedSeats={setSelectedSeats}
          rowSelection={selectedSeats['d']}
        />
        <SeatRow
          row="e"
          rowBookings={bookingsForSelectedMovie['e'] ?? []}
          setSelectedSeatsCount={setSelectedSeatsCount}
          ticketPrice={selectedMovie.price}
          currentSeatCount={selectedSeatsCount}
          setTotalPrice={setTotalPrice}
          setSelectedSeats={setSelectedSeats}
          rowSelection={selectedSeats['e']}
        />
        <SeatRow
          row="f"
          rowBookings={bookingsForSelectedMovie['f'] ?? []}
          setSelectedSeatsCount={setSelectedSeatsCount}
          ticketPrice={selectedMovie.price}
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
  );
}

export default App;
