import type { Booking } from '../interfaces/Booking';
import { Seat } from './Seat';

type SeatRowProps = {
  row: string;
  rowBookings: Booking[];
  seatsPerRow?: number;
};

export const SeatRow = ({
  row,
  rowBookings,
  seatsPerRow = 8,
}: SeatRowProps) => {
  const seats: Array<React.JSX.Element> = [];

  for (let i = 1; i <= seatsPerRow; i++) {
    const seatStatus = rowBookings.some((booking) => booking?.seat === i)
      ? 'occupied'
      : 'available';
    seats.push(
      <Seat
        key={`${row.toUpperCase()}${i}`}
        size="large"
        status={seatStatus}
      />,
    );
  }

  return <div className="row">{seats}</div>;
};
