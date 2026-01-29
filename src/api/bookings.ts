import type CustomerBooking from '../interfaces/CustomerBooking';
import type { Row } from '../interfaces/Row';
import type { SeatBookings } from '../interfaces/SeatBookings';

const dbUrl = 'http://localhost:3000/bookings';

export async function loadBookings(): Promise<SeatBookings> {
  const response = await fetch(dbUrl);

  const data: SeatBookings = await response.json();

  return data;
}

export async function saveBookingData(
  movieId: string,
  data: Record<Row, CustomerBooking[]>,
): Promise<Boolean> {
  try {
    const response = await fetch(`${dbUrl}/${movieId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return false;
    }

    return true;
  } catch (ex: unknown) {
    console.log(ex);
    return false;
  }
}

export async function deleteBooking(id: string): Promise<Boolean> {
  const response = await fetch(`${dbUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.ok;
}
