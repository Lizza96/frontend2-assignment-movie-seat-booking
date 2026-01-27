type BookingButtonProps = {
  isClickable: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const BookingButton = ({
  isClickable,
  onClick,
  children,
}: BookingButtonProps) => {
  return (
    <button
      onClick={isClickable ? onClick : undefined}
      disabled={isClickable ? undefined : true}
      className="book-tickets-btn"
      title={
        isClickable
          ? 'Book Tickets'
          : 'You must select seats before you can book tickets'
      }
    >
      {children}
    </button>
  );
};
