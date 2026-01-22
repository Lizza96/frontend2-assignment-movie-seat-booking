import { Seat } from './Seat';

export const SeatLegend = () => {
  return (
    <ul className="showcase">
      <li>
        <Seat>Avaliable</Seat>
      </li>
      <li>
        <Seat isSelected>Selected</Seat>
      </li>
      <li>
        <Seat isOccupied>Occupied</Seat>
      </li>
    </ul>
  );
};
