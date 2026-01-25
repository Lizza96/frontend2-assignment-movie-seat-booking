import './App.css';
import { useEffect, useState } from 'react';
import { BookingSummary } from './components/BookingSummary';
import { MoviePicker } from './components/MoviePicker';
import { SeatLegend } from './components/SeatLegend';
import { SeatGrid } from './components/SeatGrid';
import loadBookings from './api/bookings';
import type { SeatBookings } from './interfaces/SeatBookings';
import Movie from './models/Movie';
import loadMovies from './api/movies';

function App() {
  const [selectedSeatsCount, setSelectedSeatsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookings, setbookings] = useState({} as SeatBookings);
  const [movies, setMovies] = useState(Array<Movie>);
  const [selectedMovie, setSelectedMovie] = useState({} as Movie);

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

  if (bookings[selectedMovie.id] === undefined) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <MoviePicker movies={movies} />

      <SeatLegend />

      <div className="container">
        <div className="screen"></div>
        <SeatGrid selectedMovieBookings={bookings[selectedMovie.id]} />
      </div>

      <BookingSummary
        selectedSeatsCount={selectedSeatsCount}
        totalPrice={totalPrice}
      />
    </>
  );
}

export default App;
