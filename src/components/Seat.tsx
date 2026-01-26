type SeatProps = {
  children?: React.ReactNode;
  status?: 'occupied' | 'selected' | 'available';
  size?: 'large' | 'small';
  setSelectedSeatsCount: React.Dispatch<React.SetStateAction<number>>;
  ticketPrice: number;
  currentSeatCount: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  row: 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
  seatNumber: number;
  setSelectedSeats: React.Dispatch<
    React.SetStateAction<{
      a: number[];
      b: number[];
      c: number[];
      d: number[];
      e: number[];
      f: number[];
    }>
  >;
};

export const Seat = ({
  size = 'small',
  status = 'available',
  children,
  setSelectedSeatsCount,
  ticketPrice,
  currentSeatCount,
  setTotalPrice,
  row,
  seatNumber,
  setSelectedSeats,
}: SeatProps) => {
  const isSelected = status == 'selected';

  function handleClick() {
    const newCount = isSelected ? currentSeatCount - 1 : currentSeatCount + 1;

    setSelectedSeatsCount(() => newCount);

    const totalPrice = ticketPrice * newCount;

    setTotalPrice(totalPrice);

    setSelectedSeats((prevSeats) => ({
      ...prevSeats,
      [row]: isSelected
        ? prevSeats[row].filter((seat) => seat != seatNumber)
        : [...prevSeats[row], seatNumber],
    }));
  }

  const seatClass = `seat${status === 'available' ? '' : ` ${status}`} ${size}`;
  const legendLabel = children ? <small>{children}</small> : null;

  return (
    <>
      <div
        className={seatClass}
        onClick={
          status != 'occupied' && legendLabel === null ? handleClick : undefined
        }
      ></div>
      {legendLabel}
    </>
  );
};
