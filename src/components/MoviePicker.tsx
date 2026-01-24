import type Movie from '../models/Movie';

type MoviePickerProps = {
  movies: Array<Movie>;
};

export const MoviePicker = ({ movies }: MoviePickerProps) => {
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
