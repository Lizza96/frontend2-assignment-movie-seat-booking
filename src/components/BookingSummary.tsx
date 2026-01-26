type BookingSummaryProps = {
  selectedSeatsCount: number;
  totalPrice: number;
};

export const BookingSummary = ({
  selectedSeatsCount,
  totalPrice,
}: BookingSummaryProps) => {
  return (
    <div className="booking-wrapper">
      <p className="text">
        You have selected <span id="count">{selectedSeatsCount}</span> seats for
        a price of $<span id="total">{totalPrice}</span>
      </p>
      <button
        disabled={selectedSeatsCount == 0 ? true : undefined}
        className="book-tickets-btn"
        title={
          selectedSeatsCount == 0
            ? 'Du måste välja platser innan du kan boka biljetter'
            : 'Boka biljetterna'
        }
      >
        Boka
      </button>
    </div>
  );
};
