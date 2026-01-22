type BookingSummaryProps = {
  selectedSeatsCount: number;
  totalPrice: number;
};

export const BookingSummary = ({
  selectedSeatsCount,
  totalPrice,
}: BookingSummaryProps) => {
  return (
    <p className="text">
      You have selected <span id="count">{selectedSeatsCount}</span> seats for a
      price of $<span id="total">{totalPrice}</span>
    </p>
  );
};
