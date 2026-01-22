type SeatProps = {
  children?: React.ReactNode;
  isSelected?: boolean;
  isOccupied?: boolean;
};

export const Seat = ({ isSelected, isOccupied, children }: SeatProps) => {
  const seatClass = `seat${isSelected ? ' selected' : ''}${isOccupied ? ' occupied' : ''}`;
  const label = children ? <small>{children}</small> : null;

  return (
    <>
      <div className={seatClass}></div>
      {label}
    </>
  );
};
