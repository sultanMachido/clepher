import { ReactNode } from "react";

type SelectInputProps = {
  children: ReactNode;
  change?: (event: any) => void;
};
const SelectInput = ({ children, change }: SelectInputProps) => {
  return (
    <select
      className="select dark:text-black select-bordered w-full "
      onChange={change}
    >
      {children}
    </select>
  );
};

export default SelectInput;
