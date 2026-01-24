import type { Booking } from './Booking';

export interface SeatBookings {
  [movieName: string]: Record<string, Booking[]>;
}
