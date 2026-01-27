import { useState } from 'react';
import { BookingButton } from './BookingButton';

type BookingSummaryProps = {
  selectedSeatsCount: number;
  totalPrice: number;
};

export const BookingSummary = ({
  selectedSeatsCount,
  totalPrice,
}: BookingSummaryProps) => {
  const [showForm, setShowForm] = useState(false);

  function displayForm() {
    setShowForm(true);
  }

  return (
    <>
      <div className="booking-wrapper">
        <p className="text">
          You have selected <span id="count">{selectedSeatsCount}</span> seats
          for a price of $<span id="total">{totalPrice}</span>
        </p>

        {!showForm ? (
          <button
            onClick={selectedSeatsCount <= 0 ? undefined : displayForm}
            disabled={selectedSeatsCount <= 0 ? true : undefined}
            className="book-tickets-btn"
            title={
              selectedSeatsCount <= 0
                ? 'You must select seats before you can book tickets'
                : 'Book Tickets'
            }
          >
            Book Tickets
          </button>
        ) : null}
      </div>

      {showForm ? (
        <form>
          <div className="form-row">
            <label>Name:</label>
            <input />
          </div>
          <div className="form-row">
            <label>Phone number:</label>
            <input />
          </div>
          <button
            onClick={selectedSeatsCount <= 0 ? undefined : displayForm}
            disabled={selectedSeatsCount <= 0 ? true : undefined}
            className="book-tickets-btn"
            title={
              selectedSeatsCount <= 0
                ? 'You must select seats before you can book tickets'
                : 'Book Tickets'
            }
          >
            Book {selectedSeatsCount} ticket(s)
          </button>
        </form>
      ) : null}
    </>
  );
};
