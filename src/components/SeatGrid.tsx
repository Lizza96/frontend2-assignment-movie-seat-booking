import { Seat } from './Seat';
import type { SeatBookings } from '../interfaces/SeatBookings';

type SeatGridProps = {
  bookings: SeatBookings;
};

export const SeatGrid = ({ bookings }: SeatGridProps) => {
  const totalSeats: number = 48;

  return (
    <>
      {/* Row A */}
      <div className="row">
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
      </div>

      {/* Row B */}
      <div className="row">
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" status="occupied" />
        <Seat size="large" status="occupied" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
      </div>

      {/* Row C */}
      <div className="row">
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" status="occupied" />
        <Seat size="large" status="occupied" />
      </div>

      {/* Row D */}
      <div className="row">
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
      </div>

      {/* Row E */}
      <div className="row">
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" status="occupied" />
        <Seat size="large" status="occupied" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
      </div>

      {/* Row F */}
      <div className="row">
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" status="occupied" />
        <Seat size="large" status="occupied" />
        <Seat size="large" status="occupied" />
        <Seat size="large" />
      </div>
    </>
  );
};
