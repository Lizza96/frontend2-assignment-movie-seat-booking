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
          <BookingButton
            isClickable={selectedSeatsCount > 0}
            onClick={displayForm}
          >
            Book Tickets
          </BookingButton>
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
          <BookingButton
            isClickable={selectedSeatsCount > 0}
            onClick={() => alert('Booking')}
          >
            Book {selectedSeatsCount} ticket(s)
          </BookingButton>
        </form>
      ) : null}
    </>
  );
};
