import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: () => void;
  isLoading?: boolean;
  className?: string;
}

export default function Button({ children, onClick, isLoading, className, ...props }: ButtonProps) {
  return (
    <button
      onClick={onClick && onClick}
      className={classNames("bg-primary hover:bg-primary/80 text-white px-4 py-1 h-10 rounded-md flex items-center justify-center", className)}
      {...props}
    >
      {isLoading ? <span className="loader" /> : children}
    </button>
  );
}
