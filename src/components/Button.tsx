import type { ButtonProps } from '../models/ButtonProps';

export function Button({ children, onClick, step, direction }: ButtonProps) {
  const isDisabled =
    step !== undefined &&
    ((direction === 'next' && step >= 3) || (direction === 'previous' && step <= 1));

  return (
    <button
      className={`button ${isDisabled ? 'disabled-btn' : ''}`}
      type="button"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
