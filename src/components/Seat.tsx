import { useState } from 'react';

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
  function handleClick() {
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
