import type Customer from './Customer';

export default interface CustomerBooking {
  seat: number;
  customer: Customer;
}
