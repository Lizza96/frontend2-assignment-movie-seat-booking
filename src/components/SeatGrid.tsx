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
        <Seat size="large" isOccupied />
        <Seat size="large" isOccupied />
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
        <Seat size="large" isOccupied />
        <Seat size="large" isOccupied />
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
        <Seat size="large" isOccupied />
        <Seat size="large" isOccupied />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
      </div>
      <div className="row">
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" />
        <Seat size="large" isOccupied />
        <Seat size="large" isOccupied />
        <Seat size="large" isOccupied />
        <Seat size="large" />
      </div>
    </>
  );
};
