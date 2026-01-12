import loadMovies from './movie.js';

// variables
const avaliableSeats = document.querySelectorAll(
  '.seat:not(.selected):not(.occupied)'
);

let selectedSeatsCount = 0;
const countElement = document.querySelector('#count');

const totalElement = document.querySelector('#total');

const movieSelect = document.querySelector('#movie');

await displaySelectOptions();

// functions
async function displaySelectOptions() {
  // Hämta från json-server-databasen
  const movies = await loadMovies();

  console.log(movies);

  for (const movie of movies) {
    const optionsElement = document.createElement('option');

    optionsElement.innerText = `${movie.name} (${movie.price} kr)`;
    optionsElement.value = movie.price;

    movieSelect.append(optionsElement);
  }
}

function displayTotalCost() {
  totalElement.innerText = selectedSeatsCount * Number(movieSelect.value);
}

function clickSeat(seatElement) {
  seatElement.classList.toggle('selected');

  if (seatElement.classList.contains('selected')) {
    selectedSeatsCount += 1;
  } else {
    selectedSeatsCount -= 1;
  }

  countElement.innerText = selectedSeatsCount;
  displayTotalCost();
}

// event listeners
movieSelect.addEventListener('change', displayTotalCost);

avaliableSeats.forEach((seat) => {
  seat.addEventListener('click', () => clickSeat(seat));
});
