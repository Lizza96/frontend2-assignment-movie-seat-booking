import type { SeatBookings } from '../interfaces/SeatBookings';

const dbUrl = 'http://localhost:3000/bookings';

export default async function loadBookings(): Promise<SeatBookings> {
  const response = await fetch(dbUrl);

  const data: SeatBookings = await response.json();

  return data;
}
