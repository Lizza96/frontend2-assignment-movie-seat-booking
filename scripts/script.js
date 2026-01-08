//Variables
const avaliableSeats = document.querySelectorAll(
  '.seat:not(.selected):not(.occupied)'
);

let selectedSeatsCount = 0;
const countElement = document.querySelector('#count');

//event listeners
for (const seat of avaliableSeats) {
  seat.addEventListener('click', () => clickSeat(seat));
}

//functions
function clickSeat(seatElement) {
  seatElement.classList.toggle('selected');

  if (seatElement.classList.contains('selected')) {
    selectedSeatsCount += 1;
  } else {
    selectedSeatsCount -= 1;
  }

  countElement.innerText = selectedSeatsCount;
}
