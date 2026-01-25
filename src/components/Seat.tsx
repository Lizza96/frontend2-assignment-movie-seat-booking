import { useState } from 'react';

type SeatProps = {
  children?: React.ReactNode;
  status?: 'occupied' | 'selected' | 'available';
  size?: 'large' | 'small';
  setSelectedSeatsCount: React.Dispatch<React.SetStateAction<number>>;
};

export const Seat = ({
  size = 'small',
  status = 'available',
  children,
  setSelectedSeatsCount,
}: SeatProps) => {
  function handleClick() {
    setSelectedSeatsCount((prevCount) =>
      isSelected ? prevCount - 1 : prevCount + 1,
    );

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
