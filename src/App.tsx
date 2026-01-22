import './App.css';
import { useState } from 'react';
import { BookingSummary } from './components/BookingSummary';
import { MoviePicker } from './components/MoviePicker';
import { SeatLegend } from './components/SeatLegend';

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
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
        </div>
        <div className="row">
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat occupied"></div>
          <div className="seat"></div>
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
