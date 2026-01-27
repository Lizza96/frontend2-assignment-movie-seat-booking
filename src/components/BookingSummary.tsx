import { useState, useActionState } from 'react';
import { BookingButton } from './BookingButton';

type BookingSummaryProps = {
  selectedSeatsCount: number;
  totalPrice: number;
  onBooking: (
    previousState: unknown,
    formData: FormData,
  ) => {
    errors: Record<string, string>;
  };
};

export const BookingSummary = ({
  selectedSeatsCount,
  totalPrice,
  onBooking,
}: BookingSummaryProps) => {
  const [showForm, setShowForm] = useState(false);
  const [data, formAction, isPending] = useActionState(onBooking, undefined);

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
        <form action={formAction}>
          <div className="form-row">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className={data?.errors?.name && 'input-error'}
              pattern="[A-Za-zÅÄÖåäö]+([ -'][A-Za-zÅÄÖåäö]+)*"
              placeholder="Firstname & Lastname"
              title="Name cannot be empty, contain numbers or special characters."
              required
            />
            {data?.errors?.name && (
              <span className="error">{data?.errors?.name}</span>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="phone">Phone number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className={data?.errors?.phone && 'input-error'}
              pattern="(?:(?:\+|00)46|0)?7(?:[ \-]?[0-9]{3}){2}[ \-]?[0-9]{2}"
              title="Must be a swedish phone number in one of the following patterns: 0701234567, 070 123 45 67, 070-123-45-67, +46701234567, 0046701234567"
              placeholder="070 123 45 67"
              required
            />
            {data?.errors?.phone && (
              <span className="error">{data?.errors?.phone}</span>
            )}
          </div>
          <BookingButton
            isClickable={selectedSeatsCount > 0}
            isPending={isPending}
          >
            Book {selectedSeatsCount} ticket(s)
          </BookingButton>
        </form>
      ) : null}
    </>
  );
};
