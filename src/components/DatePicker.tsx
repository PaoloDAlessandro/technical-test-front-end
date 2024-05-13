import classNames from "classnames";
import Input from "./core/Input";
import Select from "./core/Select";
import { monthOptions } from "../data";

interface DatePickerProps {
  label?: string;
  error?: string;
}

export default function DatePicker({ label, error }: DatePickerProps) {
  return (
    <div className={classNames("flex flex-col min-h-[70px]")}>
      {label && <label>{label}</label>}
      <div className="flex flex-row gap-x-2">
        <Input type="number" name="day" placeholder="DD" containerClassName="w-1/3" />
        <Select name="month" options={monthOptions} containerClassName="w-1/3" />
        <Input type="number" name="year" placeholder="YYYY" containerClassName="w-1/3" />
      </div>
      {error && <p className="font-medium text-[10px] uppercase text-error h-2">{error}</p>}
    </div>
  );
}
