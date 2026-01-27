import type CustomerBooking from '../interfaces/CustomerBooking';
import { Seat } from './Seat';

type SeatRowProps = {
  row: 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
  rowBookings: CustomerBooking[];
  seatsPerRow?: number;
  setSelectedSeatsCount: React.Dispatch<React.SetStateAction<number>>;
  ticketPrice: number;
  currentSeatCount: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
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
  rowSelection: number[];
};

export const SeatRow = ({
  row,
  rowBookings,
  seatsPerRow = 8,
  setSelectedSeatsCount,
  ticketPrice,
  currentSeatCount,
  setTotalPrice,
  setSelectedSeats,
  rowSelection,
}: SeatRowProps) => {
  const seats: Array<React.JSX.Element> = [];

  for (let i = 1; i <= seatsPerRow; i++) {
    const seatStatus = rowBookings.some((booking) => booking?.seat === i)
      ? 'occupied'
      : rowSelection.includes(i)
        ? 'selected'
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
        row={row}
        seatNumber={i}
        setSelectedSeats={setSelectedSeats}
      />,
    );
  }

  return <div className="row">{seats}</div>;
};
