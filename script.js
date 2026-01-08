//Variables
const avaliableSeats = document.querySelectorAll(
  '.seat:not(.selected):not(.occupied)'
);

console.log(avaliableSeats);

//event listeners
for (const seat of avaliableSeats) {
  seat.addEventListener('click', () => selectSeat(seat));
}

//functions
function selectSeat(seatElement) {
  console.log(seatElement);
  seatElement.classList.add('selected');
}
