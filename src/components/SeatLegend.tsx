import { Seat } from './Seat';

export const SeatLegend = () => {
  return (
    <ul className="showcase">
      <li>
        <Seat size="small">Avaliable</Seat>
      </li>
      <li>
        <Seat size="small" status="selected">
          Selected
        </Seat>
      </li>
      <li>
        <Seat size="small" status="occupied">
          Occupied
        </Seat>
      </li>
    </ul>
  );
};
