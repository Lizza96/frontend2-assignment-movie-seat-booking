import { Seat } from './Seat';

export const SeatGrid = () => {
  const totalSeats: number = 48;
  return (
    <>
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
