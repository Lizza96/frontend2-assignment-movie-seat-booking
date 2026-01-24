import type { Booking } from '../interfaces/Booking';
import { SeatRow } from './SeatRow';

type SeatGridProps = {
  selectedMovieBookings: Record<string, Booking[]>;
};

export const SeatGrid = ({ selectedMovieBookings }: SeatGridProps) => {
  return (
    <>
      {/* Row A */}
      <SeatRow row="a" rowBookings={selectedMovieBookings['a']} />

      {/* Row B */}
      <SeatRow row="b" rowBookings={selectedMovieBookings['b']} />

      {/* Row C */}
      <SeatRow row="c" rowBookings={selectedMovieBookings['c']} />

      {/* Row D */}
      <SeatRow row="d" rowBookings={selectedMovieBookings['d']} />

      {/* Row E */}
      <SeatRow row="e" rowBookings={selectedMovieBookings['e']} />

      {/* Row F */}
      <SeatRow row="f" rowBookings={selectedMovieBookings['f']} />
    </>
  );
};
