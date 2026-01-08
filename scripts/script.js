//Variables
const avaliableSeats = document.querySelectorAll(
  '.seat:not(.selected):not(.occupied)'
);

//event listeners
for (const seat of avaliableSeats) {
  seat.addEventListener('click', () => clickSeat(seat));
}

//functions
function clickSeat(seatElement) {
  seatElement.classList.toggle('selected');
}
