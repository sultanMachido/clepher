import { useEffect, useState } from "react";
import Dropdown, { DropdownList } from "./form-kit/dropdown";

type FilterProps = {
  addFilterCriteria: (value: string) => void;
};
const Filter = ({ addFilterCriteria }: FilterProps) => {
  return (
    <Dropdown text="Filter By">
      <DropdownList click={addFilterCriteria} value="name">
        <p>Name</p>
      </DropdownList>
      <DropdownList click={addFilterCriteria} value="conversion">
        <p>Conversion</p>
      </DropdownList>
      <DropdownList click={addFilterCriteria} value="acquired">
        <p>Acquired</p>
      </DropdownList>
      <DropdownList click={addFilterCriteria} value="platform">
        <p>Platform</p>
      </DropdownList>
      <DropdownList click={addFilterCriteria} value="date">
        <p>Date</p>
      </DropdownList>
    </Dropdown>
  );
};

export default Filter;

export const useFilter = () => {
  const [filterBy, setFilterBy] = useState("");
  const [openDateFilter, setOpenDateFilter] = useState(false);
  const [filteredData, setFilteredData] = useState<
    { [key: string]: string | number }[]
  >([]);

  useEffect(() => {
    if (filterBy === "date") {
      setOpenDateFilter(true);
    } else {
      setOpenDateFilter(false);
    }
  }, [filterBy]);

  const addFilterCriteria = (filterCriteria: string) => {
    setFilterBy(filterCriteria);
  };

  const addFilteredData = (data: { [key: string]: any }[]) => {
    setFilteredData(data);
  };

  return {
    filterBy,
    addFilterCriteria,
    openDateFilter,
    addFilteredData,
    filteredData,
  };
};
