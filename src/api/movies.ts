import Movie from '../models/Movie';
import type { MovieEntity } from '../interfaces/MovieEntity';

const dbUrl = 'https://my-json-server.typicode.com/Lizza96/frontend2-db/movies';

export async function loadMovies(): Promise<Array<Movie>> {
  const response = await fetch(dbUrl, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json;odata.metadata=full',
    },
  });

  const data = await response.json();

  const movies: Array<Movie> = data.map(
    (movieEntity: MovieEntity) =>
      new Movie(movieEntity.id, movieEntity.title, movieEntity.price),
  );

  return movies;
}

export async function deleteMovie(id: string): Promise<boolean> {
  const response = await fetch(`${dbUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json;odata.metadata=full',
      'Content-Type': 'application/json',
    },
  });

  return response.ok;
}

export async function updateMovie(
  id: string,
  updatedData: Partial<MovieEntity>,
): Promise<boolean> {
  const response = await fetch(`${dbUrl}/${id}`, {
    method: 'PATCH',
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json;odata.metadata=full',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });

  return response.ok;
}

export async function createMovie(data: Partial<MovieEntity>) {
  const response = await fetch(`${dbUrl}`, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json;odata.metadata=full',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.ok;
}
