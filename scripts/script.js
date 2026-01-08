//Variables
const avaliableSeats = document.querySelectorAll(
  '.seat:not(.selected):not(.occupied)'
);

let selectedSeatsCount = 0;
const countElement = document.querySelector('#count');

let totalCost = 0;
const totalElement = document.querySelector('#total');

const movieSelect = document.querySelector('#movie');

//event listeners
movieSelect.addEventListener('change', displayTotalCost);

for (const seat of avaliableSeats) {
  seat.addEventListener('click', () => clickSeat(seat));
}

//functions
function displayTotalCost() {
  totalElement.innerText = selectedSeatsCount * Number(movieSelect.value);
}

function clickSeat(seatElement) {
  console.log(seatElement);

  seatElement.classList.toggle('selected');

  if (seatElement.classList.contains('selected')) {
    selectedSeatsCount += 1;
  } else {
    selectedSeatsCount -= 1;
  }

  countElement.innerText = selectedSeatsCount;
  displayTotalCost();
}
