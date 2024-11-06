import { useEffect, useState } from "react";

export const useRowSelection = () => {
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {}, [rowSelection]);

  return {
    rowSelection,
    setRowSelection,
  };
};
