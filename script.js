//Variables
const avaliableSeats = document.querySelectorAll(
  '.seat:not(.selected):not(.occupied)'
);

//event listeners
for (const seat of avaliableSeats) {
  seat.addEventListener('click', () => selectSeat(seat));
}

//functions
function selectSeat(seatElement) {
  seatElement.classList.toggle('selected');

  //byter ut click eventlistener till deselectSeat
  seatElement.removeEventListener('click', () => selectSeat(seatElement));
  seatElement.addEventListener('click', () => deselectSeat(seatElement));
}

function deselectSeat(seatElement) {
  seatElement.classList.toggle('selected');

  //byter ut click eventlistener till selectSeat
  seatElement.removeEventListener('click', () => deselectSeat(seatElement));
  seatElement.addEventListener('click', () => selectSeat(seatElement));
}
