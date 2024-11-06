import { useState } from "react";
import { formatDate } from "../../utils";

type DateInputProps = {
  selectDate: (event: any) => void;
};

const DateInput = ({ selectDate }: DateInputProps) => {
  const maxDate = formatDate(new Date());
  return (
    <label className="z-[0] relative input input-sm input-bordered border border-neutral bg-base-100 focus:outline-none flex items-center gap-2">
      <input
        type="date"
        className="dark:text-black grow h-[30px] focus:outline-none  "
        placeholder=""
        max={maxDate}
        onChange={selectDate}
      />
    </label>
  );
};

export default DateInput;

export const useDate = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const addDate = (event: any) => {
    setSelectedDate(event.target.value);
  };

  return {
    selectedDate,
    addDate,
  };
};
