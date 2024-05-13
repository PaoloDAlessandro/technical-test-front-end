import classNames from "classnames";
import { useState } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  formatValue?: (value: string) => string;
  className?: string;
}

export default function Input({ label, error, className, containerClassName, formatValue, type, ...props }: InputProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(formatValue ? formatValue(value) : value);
  };

  return (
    <div className={classNames("flex flex-col min-h-[70px]", containerClassName)}>
      {label && <label htmlFor={props["name"]}>{label}</label>}
      <input
        type={type}
        className={classNames(
          "'h-10 w-full rounded-[5px] border border-primary bg-white p-2 text-sm text-[15px] font-primary text-primary', flex ring-offset-none placeholder:text-primary/60 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          {
            "!border-alert": error,
          }
        )}
        value={value}
        onChange={handleChange}
        {...props}
      />
      {error && <p className="font-medium text-[10px] uppercase text-error h-2">{error}</p>}
    </div>
  );
}
