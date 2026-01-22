type BookingSummaryProps = {
  seatCount: number;
  totalPrice: number;
};

export const BookingSummary = ({
  seatCount,
  totalPrice,
}: BookingSummaryProps) => {
  return (
    <p className="text">
      You have selected <span id="count">{seatCount}</span> seats for a price of
      $<span id="total">{totalPrice}</span>
    </p>
  );
};
