import { useState } from 'react';

type SeatProps = {
  children?: React.ReactNode;
  status?: 'occupied' | 'selected' | 'available';
  size?: 'large' | 'small';
  setSelectedSeatsCount: React.Dispatch<React.SetStateAction<number>>;
  ticketPrice: number;
  currentSeatCount: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
};

export const Seat = ({
  size = 'small',
  status = 'available',
  children,
  setSelectedSeatsCount,
  ticketPrice,
  currentSeatCount,
  setTotalPrice,
}: SeatProps) => {
  function handleClick() {
    const newCount = isSelected ? currentSeatCount - 1 : currentSeatCount + 1;

    setSelectedSeatsCount(() => newCount);

    const totalPrice = ticketPrice * newCount;

    setTotalPrice(totalPrice);

    setIsSelected(!isSelected);
  }

  const [isSelected, setIsSelected] = useState(false);

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
