import type MovieBooking from './MovieBooking';

export type Row = Exclude<keyof MovieBooking, 'id'>;
