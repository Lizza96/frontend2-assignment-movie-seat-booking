import './App.css';
import { useEffect, useState } from 'react';
import { BookingSummary } from './components/BookingSummary';
import { MoviePicker } from './components/MoviePicker';
import { SeatLegend } from './components/SeatLegend';
import { SeatGrid } from './components/SeatGrid';
import loadBookings from './api/bookings';
import type { SeatBookings } from './interfaces/SeatBookings';

function App() {
  const [selectedSeatsCount, setSelectedSeatsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bookings, setbookings] = useState({} as SeatBookings);
  const [selectedMovie, setSelectedMovie] = useState('');

  //Fetch bookings from API, once on mount
  useEffect(() => {
    async function getBookingsData() {
      const fetchedBookings = await loadBookings();
      setbookings(fetchedBookings);
    }

    getBookingsData();
  }, []);

  return (
    <>
      <MoviePicker />

      <SeatLegend />

      <div className="container">
        <div className="screen"></div>
        <SeatGrid bookings={bookings} />
      </div>
      <BookingSummary
        selectedSeatsCount={selectedSeatsCount}
        totalPrice={totalPrice}
      />
    </>
  );
}

export default App;
