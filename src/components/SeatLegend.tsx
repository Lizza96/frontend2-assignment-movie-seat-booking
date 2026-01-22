import { Seat } from './Seat';

export const SeatLegend = () => {
  return (
    <ul className="showcase">
      <li>
        <Seat size="small">Avaliable</Seat>
      </li>
      <li>
        <Seat size="small" isSelected>
          Selected
        </Seat>
      </li>
      <li>
        <Seat size="small" isOccupied>
          Occupied
        </Seat>
      </li>
    </ul>
  );
};
