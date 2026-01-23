type SeatProps = {
  children?: React.ReactNode;
  status?: 'occupied' | 'selected' | 'available';
  size?: 'large' | 'small';
};

export const Seat = ({
  size = 'small',
  status = 'available',
  children,
}: SeatProps) => {
  const seatClass = `seat${status === 'available' ? '' : ` ${status}`} ${size}`;
  const label = children ? <small>{children}</small> : null;

  return (
    <>
      <div className={seatClass}></div>
      {label}
    </>
  );
};
