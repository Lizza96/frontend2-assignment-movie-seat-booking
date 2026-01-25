import type { Booking } from '../interfaces/Booking';
import { Seat } from './Seat';

type SeatRowProps = {
  row: string;
  rowBookings: Booking[];
  seatsPerRow?: number;
  setSelectedSeatsCount: React.Dispatch<React.SetStateAction<number>>;
  ticketPrice: number;
  currentSeatCount: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
};

export const SeatRow = ({
  row,
  rowBookings,
  seatsPerRow = 8,
  setSelectedSeatsCount,
  ticketPrice,
  currentSeatCount,
  setTotalPrice,
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
        setSelectedSeatsCount={setSelectedSeatsCount}
        ticketPrice={ticketPrice}
        currentSeatCount={currentSeatCount}
        setTotalPrice={setTotalPrice}
      />,
    );
  }

  return <div className="row">{seats}</div>;
};
