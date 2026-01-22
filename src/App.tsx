import './App.css';
import { useState } from 'react';
import { BookingSummary } from './components/BookingSummary';
import { MoviePicker } from './components/MoviePicker';
import { SeatLegend } from './components/SeatLegend';
import { SeatGrid } from './components/SeatGrid';

function App() {
  const [selectedSeatsCount, setselectedSeatsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <MoviePicker />

      <SeatLegend />

      <div className="container">
        <div className="screen"></div>
        <SeatGrid />
      </div>
      <BookingSummary
        selectedSeatsCount={selectedSeatsCount}
        totalPrice={totalPrice}
      />
    </>
  );
}

export default App;
