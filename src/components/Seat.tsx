type SeatProps = {
  children?: React.ReactNode;
  isSelected?: boolean;
  isOccupied?: boolean;
  size?: 'large' | 'small';
};

export const Seat = ({
  isSelected,
  isOccupied,
  size = 'small',
  children,
}: SeatProps) => {
  const seatClass = `seat${isSelected ? ' selected' : ''}${isOccupied ? ' occupied' : ''} ${size}`;
  const label = children ? <small>{children}</small> : null;

  return (
    <>
      <div className={seatClass}></div>
      {label}
    </>
  );
};
