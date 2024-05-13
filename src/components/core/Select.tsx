import classNames from "classnames";
import { useState } from "react";
import { SelectOption } from "../../types";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  options: SelectOption[];
  className?: string;
}

export default function Select({ label, error, className, options, containerClassName, ...props }: SelectProps) {
  const [value, setValue] = useState<string | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  return (
    <div className={classNames("flex flex-col min-h-[70px]", containerClassName)}>
      {label && <label htmlFor={props["name"]}>{label}</label>}
      <select
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
      >
        <option selected>Select a option</option>
        {options.map((option) => (
          <option id={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="font-medium text-[10px] uppercase text-error h-2">{error}</p>}
    </div>
  );
}
