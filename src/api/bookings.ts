import type CustomerBooking from '../interfaces/CustomerBooking';
import type MovieBooking from '../interfaces/MovieBooking';
import type { Row } from '../interfaces/Row';
import type { SeatBookings } from '../interfaces/SeatBookings';

const dbUrl =
  'https://my-json-server.typicode.com/Lizza96/frontend2-db/bookings';

export async function loadBookings(): Promise<SeatBookings> {
  const response = await fetch(dbUrl, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json;odata.metadata=full',
    },
  });

  const data: SeatBookings = await response.json();

  return data;
}

export async function saveBookingData(
  movieId: string,
  data: Record<Row, CustomerBooking[]>,
): Promise<boolean> {
  try {
    const response = await fetch(`${dbUrl}/${movieId}`, {
      method: 'PATCH',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json;odata.metadata=full',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return response.ok;
  } catch (ex: unknown) {
    console.log(ex);
    return false;
  }
}

export async function deleteBooking(id: string): Promise<boolean> {
  const response = await fetch(`${dbUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json;odata.metadata=full',
      'Content-Type': 'application/json',
    },
  });

  return response.ok;
}

export async function createBooking(data: MovieBooking) {
  const response = await fetch(`${dbUrl}`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json;odata.metadata=full',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.ok;
}
