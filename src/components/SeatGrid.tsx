import type { Booking } from '../interfaces/Booking';
import { SeatRow } from './SeatRow';

type SeatGridProps = {
  selectedMovieBookings: Record<string, Booking[]>;
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
};

export const SeatGrid = ({
  selectedMovieBookings,
  setSelectedSeatsCount,
  ticketPrice,
  currentSeatCount,
  setTotalPrice,
  setSelectedSeats,
}: SeatGridProps) => {
  return (
    <>
      <SeatRow
        row="a"
        rowBookings={selectedMovieBookings['a']}
        setSelectedSeatsCount={setSelectedSeatsCount}
        ticketPrice={ticketPrice}
        currentSeatCount={currentSeatCount}
        setTotalPrice={setTotalPrice}
        setSelectedSeats={setSelectedSeats}
      />
      <SeatRow
        row="b"
        rowBookings={selectedMovieBookings['b']}
        setSelectedSeatsCount={setSelectedSeatsCount}
        ticketPrice={ticketPrice}
        currentSeatCount={currentSeatCount}
        setTotalPrice={setTotalPrice}
        setSelectedSeats={setSelectedSeats}
      />
      <SeatRow
        row="c"
        rowBookings={selectedMovieBookings['c']}
        setSelectedSeatsCount={setSelectedSeatsCount}
        ticketPrice={ticketPrice}
        currentSeatCount={currentSeatCount}
        setTotalPrice={setTotalPrice}
        setSelectedSeats={setSelectedSeats}
      />
      <SeatRow
        row="d"
        rowBookings={selectedMovieBookings['d']}
        setSelectedSeatsCount={setSelectedSeatsCount}
        ticketPrice={ticketPrice}
        currentSeatCount={currentSeatCount}
        setTotalPrice={setTotalPrice}
        setSelectedSeats={setSelectedSeats}
      />
      <SeatRow
        row="e"
        rowBookings={selectedMovieBookings['e']}
        setSelectedSeatsCount={setSelectedSeatsCount}
        ticketPrice={ticketPrice}
        currentSeatCount={currentSeatCount}
        setTotalPrice={setTotalPrice}
        setSelectedSeats={setSelectedSeats}
      />
      <SeatRow
        row="f"
        rowBookings={selectedMovieBookings['f']}
        setSelectedSeatsCount={setSelectedSeatsCount}
        ticketPrice={ticketPrice}
        currentSeatCount={currentSeatCount}
        setTotalPrice={setTotalPrice}
        setSelectedSeats={setSelectedSeats}
      />
    </>
  );
};
