import type { Customer } from './Customer';

export interface Booking {
  seat: number;
  customer: Customer;
}
