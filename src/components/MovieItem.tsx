import { useState } from 'react';
import type Movie from '../models/Movie';
import { ActionButton } from './ActionButton';
import type { MovieEntity } from '../interfaces/MovieEntity';

type MovieItemProps = {
  movie: Movie;
  onSaveEditMovie: (
    movieId: string,
    updatedData: Partial<MovieEntity>,
  ) => Promise<boolean>;
  onDeleteMovie: (movieId: string) => Promise<boolean>;
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
    const changedData: Partial<MovieEntity> = {};

    if (editableMovie.name != movie.name) {
      changedData.title = editableMovie.name;
    }

    if (editableMovie.price != movie.price) {
      changedData.price = editableMovie.price;
    }

    if (Object.keys(changedData).length == 0) {
      //No change
      return true;
    }

    const hasMovieUpdated = await onSaveEditMovie(movie.id, changedData);

    if (hasMovieUpdated) {
      setIsEditable(false);
    }
    return hasMovieUpdated;
  };
  const onCancelEdit = () => {
    setIsEditable(false);
    setEditableMovie(movie);
  };

  return (
    <li className="movie-item">
      {isEditable ? (
        <>
          <span className="row-group">
            <input
              type="text"
              value={editableMovie.name}
              onChange={(e) => {
                setEditableMovie({
                  ...editableMovie,
                  name: e.target.value,
                });
              }}
            />
            <input
              type="number"
              value={editableMovie.price}
              onChange={(e) => {
                setEditableMovie({
                  ...editableMovie,
                  price: Number(e.target.value),
                });
              }}
            />
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
