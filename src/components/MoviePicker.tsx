import { useEffect, useState } from 'react';
import loadMovies from '../api/movies';
import type Movie from '../models/Movie';

type MoviePickerProps = {
  setSelectedMovie: (movie: string) => void;
};

export const MoviePicker = ({ setSelectedMovie }: MoviePickerProps) => {
  const [movies, setMovies] = useState(Array<Movie>);

  //Fetch movies from API, once on mount
  useEffect(() => {
    async function getMovieData() {
      const fetchedMovies: Array<Movie> = await loadMovies();
      setMovies(fetchedMovies);
      setSelectedMovie(fetchedMovies[0].name);
    }

    getMovieData();
  }, []);

  return (
    <div className="movie-container">
      <label htmlFor="movie">Pick a movie:</label>
      <select name="movie" id="movie">
        {movies.map((movie: Movie) => (
          <option key={movie.name} value={movie.price}>
            {movie.name} ({movie.price}kr)
          </option>
        ))}
      </select>
    </div>
  );
};
