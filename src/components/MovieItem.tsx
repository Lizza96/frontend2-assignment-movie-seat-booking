import { useState } from 'react';
import type Movie from '../models/Movie';
import { ActionButton } from './ActionButton';

type MovieItemProps = {
  movie: Movie;
  onEditMovie: (movieId: string) => Promise<Boolean>;
  onDeleteMovie: (movieId: string) => Promise<Boolean>;
};

export const MovieItem = ({
  movie,
  onEditMovie,
  onDeleteMovie,
}: MovieItemProps) => {
  const [isEditable, setIsEditable] = useState(false);

  return (
    <li className="movie-item" key={movie.id}>
      <span>
        {movie.name} - {movie.price}kr
      </span>
      <span className="action-group">
        <ActionButton movieId={movie.id} onAction={onEditMovie}>
          Edit
        </ActionButton>
        <ActionButton movieId={movie.id} onAction={onDeleteMovie}>
          Delete
        </ActionButton>
      </span>
    </li>
  );
};
