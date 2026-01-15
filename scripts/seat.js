import { displaySeatCount, displayTotalCost } from './ui.js';

export let selectedSeatsCount = 0;

export function clickSeat(seatElement) {
  seatElement.classList.toggle('selected');

  if (seatElement.classList.contains('selected')) {
    selectedSeatsCount += 1;
  } else {
    selectedSeatsCount -= 1;
  }

  displaySeatCount(selectedSeatsCount);
  displayTotalCost(selectedSeatsCount);
}
