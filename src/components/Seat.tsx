type SeatProps = {
  isSelected?: boolean;
  isOccupied?: boolean;
};

export const Seat = ({ isSelected, isOccupied }: SeatProps) => {
  const seatClass = `seat${isSelected ? ' selected' : ''}${isOccupied ? ' occupied' : ''}`;

  return <div className={seatClass}></div>;
};
