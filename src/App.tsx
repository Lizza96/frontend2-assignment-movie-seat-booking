import './App.css';
import { useState } from 'react';
import { BookingSummary } from './components/BookingSummary';
import { MoviePicker } from './components/MoviePicker';
import { SeatLegend } from './components/SeatLegend';
import { Seat } from './components/Seat';

function App() {
  const [selectedSeatsCount, setselectedSeatsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <MoviePicker />

      <SeatLegend />

      <div className="container">
        <div className="screen"></div>
        <div className="row">
          <Seat size="large" />
          <Seat size="large" />

          <Seat size="large" />
          <Seat size="large" />
          <Seat size="large" />
          <Seat size="large" />

          <Seat size="large" />
          <Seat size="large" />
        </div>
        <div className="row">
          <Seat size="large" />
          <Seat size="large" />

          <Seat size="large" />
          <Seat size="large" isOccupied />
          <Seat size="large" isOccupied />
          <Seat size="large" />

          <Seat size="large" />
          <Seat size="large" />
        </div>
        <div className="row">
          <Seat size="large" />
          <Seat size="large" />

          <Seat size="large" />
          <Seat size="large" />
          <Seat size="large" />
          <Seat size="large" />

          <Seat size="large" isOccupied />
          <Seat size="large" isOccupied />
        </div>
        <div className="row">
          <Seat size="large" />
          <Seat size="large" />

          <Seat size="large" />
          <Seat size="large" />
          <Seat size="large" />
          <Seat size="large" />

          <Seat size="large" />
          <Seat size="large" />
        </div>
        <div className="row">
          <Seat size="large" />
          <Seat size="large" />

          <Seat size="large" />
          <Seat size="large" isOccupied />
          <Seat size="large" isOccupied />
          <Seat size="large" />

          <Seat size="large" />
          <Seat size="large" />
        </div>
        <div className="row">
          <Seat size="large" />
          <Seat size="large" />

          <Seat size="large" />
          <Seat size="large" />
          <Seat size="large" />
          <Seat size="large" isOccupied />

          <Seat size="large" isOccupied />
          <Seat size="large" />
        </div>
      </div>
      <BookingSummary
        selectedSeatsCount={selectedSeatsCount}
        totalPrice={totalPrice}
      />
    </>
  );
}

export default App;
