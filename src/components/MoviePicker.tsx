import type Movie from '../models/Movie';

type MoviePickerProps = {
  movies: Array<Movie>;
  onChangeMovie: (movieId: string) => void;
};

export const MoviePicker = ({ movies, onChangeMovie }: MoviePickerProps) => {
  return (
    <div className="movie-container">
      <label htmlFor="movie">Pick a movie:</label>
      <select
        name="movie"
        id="movie"
        onChange={(e) => onChangeMovie(e.target.value)}
      >
        {movies.map((movie: Movie) => (
          <option key={movie.name} value={movie.id}>
            {movie.name} ({movie.price}kr)
          </option>
        ))}
      </select>
    </div>
  );
};
