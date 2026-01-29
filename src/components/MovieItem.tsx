import { useState } from 'react';
import type Movie from '../models/Movie';
import { ActionButton } from './ActionButton';

type MovieItemProps = {
  movie: Movie;
  onSaveEditMovie: (movieId: string) => Promise<Boolean>;
  onDeleteMovie: (movieId: string) => Promise<Boolean>;
};

export const MovieItem = ({
  movie,
  onSaveEditMovie,
  onDeleteMovie,
}: MovieItemProps) => {
  const [isEditable, setIsEditable] = useState(false);
  const [editableMovie, setEditableMovie] = useState(movie);

  const handleEnableEdit = () => {
    setIsEditable(true);
  };

  const onSaveEdit = async () => {
    return false;
  };
  const onCancelEdit = async () => {
    setIsEditable(false);
    return false;
  };

  return (
    <li className="movie-item">
      {isEditable ? (
        <>
          <span className="row-group">
            <input
              value={editableMovie.name}
              onChange={(e) => {
                setEditableMovie({ ...editableMovie, name: e.target.value });
              }}
            />
            <input type="number" value={movie.price} onChange={() => {}} />
          </span>
        </>
      ) : (
        <span>
          {movie.name} - {movie.price}kr
        </span>
      )}
      <span className="row-group">
        {isEditable ? (
          <>
            <ActionButton movieId={movie.id} onAction={onSaveEdit}>
              Save
            </ActionButton>
            <ActionButton movieId={movie.id} onAction={onCancelEdit}>
              Cancel
            </ActionButton>
          </>
        ) : (
          <>
            <ActionButton movieId={movie.id} onAction={handleEnableEdit}>
              Edit
            </ActionButton>
            <ActionButton movieId={movie.id} onAction={onDeleteMovie}>
              Delete
            </ActionButton>
          </>
        )}
      </span>
    </li>
  );
};
