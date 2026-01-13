import loadMovies from './movie.js';
import { clickSeat } from './seat.js';
import { displayMovieOptions, displayTotalCost } from './ui.js';
import { selectedSeatsCount } from './seat.js';

// variables
const avaliableSeats = document.querySelectorAll(
  '.seat:not(.selected):not(.occupied)'
);

const movieSelect = document.querySelector('#movie');

const movies = await loadMovies();

// Inital startup select options
displayMovieOptions(movies);

// event listeners
movieSelect.addEventListener('change', () =>
  displayTotalCost(selectedSeatsCount)
);

avaliableSeats.forEach((seat) => {
  seat.addEventListener('click', () => clickSeat(seat));
});
