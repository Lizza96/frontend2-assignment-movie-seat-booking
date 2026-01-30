import { useActionState, useState } from 'react';
import { ActionButton } from './ActionButton';

type AddMovieProps = {
  onSubmit: (
    previousValue: unknown,
    formData: FormData,
  ) => Promise<{
    errors: Record<string, string>;
    fieldData: Record<string, string>;
  }>;
};

export const AddMovie = ({ onSubmit }: AddMovieProps) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [data, formAction, isPending] = useActionState(onSubmit, undefined);
  // const [newMovie, setNewMovie] = useState<Movie>();

  const handleEnableAdd = () => {
    setShowAddForm(true);
  };
  return (
    <div className="row-group thin-row">
      {!showAddForm ? (
        <ActionButton
          className="btn admin-btn admin-add-btn"
          movieId="new-movie"
          onAction={handleEnableAdd}
        >
          +
        </ActionButton>
      ) : (
        <form action={formAction} className="row-group thin-row">
          <div className="form-row">
            <label htmlFor="title">Movie Title:</label>
            <input
              defaultValue={data?.fieldData?.title}
              name="title"
              id="title"
              type="text"
              pattern="^\S+(?: \S+)*$"
              title="Movie title must not be empty and cannot start or end with whitespace or contain multiple whitespaces in a row."
              required
            />

            <span className="error">{data?.errors?.title}</span>
          </div>
          <div className="form-row">
            <label htmlFor="price">Ticket Price</label>
            <input
              defaultValue={data?.fieldData?.price}
              name="price"
              id="price"
              type="number"
              min={0}
              size={10}
              required
            />

            <span className="error">{data?.errors?.price}</span>
          </div>
          <button
            disabled={isPending ? true : undefined}
            className="btn admin-btn admin-save-btn"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};
