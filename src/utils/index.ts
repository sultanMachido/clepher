export function debounce(func: any, delay: any) {
  let timeoutId: any;

  return function (this: any, ...args: any) {
    const context = this;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const globalSearch = (
  data: { [key: string]: any }[],
  searchText: string,
  addSearchedData: (data: { [key: string]: any }[]) => void,
  setSearchDataNotFound?: (isFound: boolean) => void
) => {
  const regex = new RegExp(searchText.toLowerCase());

  const searchResult = data.filter((item) => {
    const rowValues = Object.values(item);
    const matches = rowValues.filter((value) =>
      regex.test(String(value).toLowerCase())
    );
    return matches.length;
  });

  if (!searchResult.length && setSearchDataNotFound) {
    addSearchedData([]);
    setSearchDataNotFound(true);
    return;
  }

  if (setSearchDataNotFound) {
    setSearchDataNotFound(false);
  }

  addSearchedData(searchResult);
};

export const searchByColumn = (
  data: { [key: string]: any }[],
  searchText: string,
  column: string,
  addSearchedData: (data: { [key: string]: any }[]) => void,
  setSearchDataNotFound?: (isFound: boolean) => void
) => {
  const regex = new RegExp(searchText.toLowerCase());
  const result = data.filter((item) => regex.test(item[column].toLowerCase()));
  if (!result.length && setSearchDataNotFound) {
    addSearchedData([]);
    setSearchDataNotFound(true);
    return;
  }

  if (setSearchDataNotFound) {
    setSearchDataNotFound(false);
  }

  addSearchedData(result);
};

export const getDataForDateRange = (
  fromDate: string,
  toDate: string,
  data: { [key: string]: string }[],
  addFilteredData: (data: { [key: string]: any }[]) => void
) => {
  const fromDateInMilliseconds = new Date(fromDate).getTime();
  const toDateInMilliseconds = new Date(toDate).getTime();

  if (toDateInMilliseconds < fromDateInMilliseconds) {
    return;
  }

  const filteredDate = data.filter(
    (item) =>
      new Date(item.createdAt).getTime() >= fromDateInMilliseconds &&
      new Date(item.createdAt).getTime() <= toDateInMilliseconds
  );
  addFilteredData(filteredDate);
};
