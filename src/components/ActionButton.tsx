type ActionButtonProps = {
  onAction: ((movieId: string) => Promise<Boolean>) | (() => void);
  movieId: string;
  className?: string;
  children: React.ReactNode;
};

export const ActionButton = ({
  onAction,
  movieId,
  className = 'btn',
  children,
}: ActionButtonProps) => {
  return (
    <button className={className} onClick={() => onAction(movieId)}>
      {children}
    </button>
  );
};
