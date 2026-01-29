type DeleteButtonProps = {
  onDeleteMovie: (movieId: string) => Promise<Boolean>;
  movieId: string;
};

export const DeleteButton = ({ onDeleteMovie, movieId }: DeleteButtonProps) => {
  return <button onClick={() => onDeleteMovie(movieId)}>Delete</button>;
};
