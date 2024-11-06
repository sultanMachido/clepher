import ReactPaginate from "react-paginate";

type PaginationProps = {
  totalCount: number;
  dataPerPage: number;
  handlePageClick: (event: any) => void;
  currentPage: number;
};
const Pagination = ({
  totalCount,
  dataPerPage,
  handlePageClick,
  currentPage,
}: PaginationProps) => {
  const pageCount = Math.ceil(totalCount / dataPerPage);
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      containerClassName="flex text-[13px] gap-2"
      pageLinkClassName="text-[#ABC2CF]"
      activeLinkClassName="dark:text-blue-400 text-black font-bold"
      disabledLinkClassName=" text-[#ABC2CF]"
      forcePage={currentPage}
      nextClassName="dark:text-white"
      previousClassName="dark:text-white"
    />
  );
};

export default Pagination;
