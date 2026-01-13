class Movie {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const dbUrl = 'http://localhost:3000/movies';

export default async function loadMovies() {
  const response = await fetch(dbUrl);

  const data = await response.json();

  const movies = data.map((movie) => new Movie(movie.title, movie.price));

  return movies;
}
