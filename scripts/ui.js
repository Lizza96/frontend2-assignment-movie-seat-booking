const countElement = document.querySelector('#count');
const totalElement = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');

export function displaySeatCount(count) {
  countElement.innerText = count;
}

export function displayTotalCost(selectedSeatsCount) {
  totalElement.innerText = selectedSeatsCount * Number(movieSelect.value);
}

export function displayMovieOptions(movies) {
  for (const movie of movies) {
    const optionsElement = document.createElement('option');

    optionsElement.innerText = `${movie.name} (${movie.price} kr)`;
    optionsElement.value = movie.price;

    movieSelect.append(optionsElement);
  }
}
