import Movie from '../models/Movie';
import type { MovieEntity } from '../interfaces/MovieEntity';

const dbUrl = 'http://localhost:3000/movies';

export async function loadMovies(): Promise<Array<Movie>> {
  const response = await fetch(dbUrl);

  const data = await response.json();

  const movies: Array<Movie> = data.map(
    (movieEntity: MovieEntity) =>
      new Movie(movieEntity.id, movieEntity.title, movieEntity.price),
  );

  return movies;
}

export async function deleteMovie(id: string): Promise<Boolean> {
  const response = await fetch(`${dbUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.ok;
}

export async function updateMovie(
  id: string,
  updatedData: Partial<MovieEntity>,
): Promise<Boolean> {
  const response = await fetch(`${dbUrl}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  return response.ok;
}
