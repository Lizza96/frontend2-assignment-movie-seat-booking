import Movie from '../models/Movie';
import type { MovieEntity } from '../interfaces/MovieEntity';

const dbUrl = 'http://localhost:3000/movies';

export default async function loadMovies(): Promise<Array<Movie>> {
  const response = await fetch(dbUrl);

  const data = await response.json();

  const movies: Array<Movie> = data.map(
    (movieEntity: MovieEntity) =>
      new Movie(movieEntity.title, movieEntity.price),
  );

  return movies;
}
