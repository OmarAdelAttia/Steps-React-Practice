export interface ButtonProps {
  step?: number;
  onClick: () => void;
  children: React.ReactNode;
  direction?: 'next' | 'previous';
}
