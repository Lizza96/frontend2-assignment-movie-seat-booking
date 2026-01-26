import { useState } from 'react';

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
  const [isSelected, setIsSelected] = useState(false);

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

    setIsSelected(!isSelected);
  }

  const seatClass = `seat${status === 'available' ? '' : ` ${status}`}${isSelected ? ' selected' : ''} ${size}`;
  const legendLabel = children ? <small>{children}</small> : null;

  return (
    <>
      <div
        className={seatClass}
        onClick={
          status === 'available' && legendLabel === null
            ? handleClick
            : undefined
        }
      ></div>
      {legendLabel}
    </>
  );
};
