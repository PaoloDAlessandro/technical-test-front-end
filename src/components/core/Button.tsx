import classNames from "classnames";

interface ButtonProps {
  children: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={classNames("bg-primary hover:bg-primary/80 text-white px-4 py-1 rounded-md", className)}>
      {children}
    </button>
  );
}
