type BookingButtonProps = {
  isClickable: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  isPending?: boolean;
};

export const BookingButton = ({
  isClickable,
  onClick,
  children,
  isPending,
}: BookingButtonProps) => {
  return (
    <button
      onClick={isClickable ? onClick : undefined}
      disabled={isClickable && !isPending ? undefined : true}
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
