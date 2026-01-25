import type { Booking } from '../interfaces/Booking';
import { SeatRow } from './SeatRow';

type SeatGridProps = {
  selectedMovieBookings: Record<string, Booking[]>;
  setSelectedSeatsCount: React.Dispatch<React.SetStateAction<number>>;
};

export const SeatGrid = ({
  selectedMovieBookings,
  setSelectedSeatsCount,
}: SeatGridProps) => {
  return (
    <>
      <SeatRow
        row="a"
        rowBookings={selectedMovieBookings['a']}
        setSelectedSeatsCount={setSelectedSeatsCount}
      />
      <SeatRow
        row="b"
        rowBookings={selectedMovieBookings['b']}
        setSelectedSeatsCount={setSelectedSeatsCount}
      />
      <SeatRow
        row="c"
        rowBookings={selectedMovieBookings['c']}
        setSelectedSeatsCount={setSelectedSeatsCount}
      />
      <SeatRow
        row="d"
        rowBookings={selectedMovieBookings['d']}
        setSelectedSeatsCount={setSelectedSeatsCount}
      />
      <SeatRow
        row="e"
        rowBookings={selectedMovieBookings['e']}
        setSelectedSeatsCount={setSelectedSeatsCount}
      />
      <SeatRow
        row="f"
        rowBookings={selectedMovieBookings['f']}
        setSelectedSeatsCount={setSelectedSeatsCount}
      />
    </>
  );
};
