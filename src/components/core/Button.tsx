interface ButtonProps {
  label: string;
  onClick: () => void;
  className: string;
}

export default function Button({ label, onClick, className }: ButtonProps) {
  return <button className=""></button>;
}
