import type { Booking } from '../interfaces/Booking';
import { SeatRow } from './SeatRow';

type SeatGridProps = {
  selectedMovieBookings: Record<string, Booking[]>;
};

export const SeatGrid = ({ selectedMovieBookings }: SeatGridProps) => {
  return (
    <>
      <SeatRow row="a" rowBookings={selectedMovieBookings['a']} />
      <SeatRow row="b" rowBookings={selectedMovieBookings['b']} />
      <SeatRow row="c" rowBookings={selectedMovieBookings['c']} />
      <SeatRow row="d" rowBookings={selectedMovieBookings['d']} />
      <SeatRow row="e" rowBookings={selectedMovieBookings['e']} />
      <SeatRow row="f" rowBookings={selectedMovieBookings['f']} />
    </>
  );
};
