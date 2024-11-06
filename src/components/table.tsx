import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Pagination from "./pagination";
import CheckBox from "./form-kit/checkbox";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ImFileEmpty } from "react-icons/im";

const columnHelper = createColumnHelper();

const columns: any = [
  columnHelper.accessor("checkbox", {
    header: ({ table }) => (
      <CheckBox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <CheckBox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  }),
  columnHelper.accessor("id", {
    header: () => (
      <p className="dark:text-white text-[#ABC2CF] text-[13px]">ID</p>
    ),
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("name", {
    id: "Name",
    cell: (info) => <p>{info.getValue()}</p>,
    header: () => (
      <p className="dark:text-white text-[#ABC2CF] text-[13px]">Name</p>
    ),
    sortingFn: "alphanumeric",
  }),
  columnHelper.accessor("engagedAndUnique", {
    header: () => (
      <p className="dark:text-white text-[#ABC2CF] text-[13px]">
        Engaged/Unique
      </p>
    ),
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("acquired", {
    header: () => (
      <p className="dark:text-white text-[#ABC2CF] text-[13px]">Acquired</p>
    ),
  }),
  columnHelper.accessor("conversion", {
    header: () => (
      <p className="dark:text-white text-[#ABC2CF] text-[13px]">Conversion</p>
    ),
  }),
  columnHelper.accessor("platform", {
    header: () => (
      <p className="dark:text-white text-[#ABC2CF] text-[13px]">Platform</p>
    ),
  }),
  columnHelper.accessor("createdAt", {
    header: () => (
      <p className="dark:text-white text-[#ABC2CF] text-[13px]">Created At</p>
    ),
    sortingFn: "datetime",
  }),
  columnHelper.accessor("action", {
    header: () => (
      <p className="dark:text-white text-[#ABC2CF] text-[13px]">Action</p>
    ),
  }),
];

const Table = ({
  data,
  pageCount,
  pagination,
  setPagination,
  currentPage,
  rowSelection,
  setRowSelection,
  sorting,
  setSorting,
  deleteRow,
  editRow,
}: any) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      pagination,
      rowSelection,
      sorting,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    debugTable: true,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getRowId: (row: { [key: string]: string }) => row.id,
    enableSorting: true,
  });

  const handlePageClick = (event: any) => {
    const newOffset = event.selected;
    table.setPageIndex(newOffset);
  };

  return (
    <>
      <div className="w-full">
        <table className="w-full">
          <thead className="dark:bg-[#6A6676] bg-[#fafafa] p-2  ">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="w-auto p-[15px] text-left  text-[#64748B]"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {data.length ? (
            <tbody className="dark:bg-bgBlackPrimary bg-white text-[13px] dark:text-white text-[#395A6B]">
              {table.getRowModel().rows.map((row: any) => (
                <tr
                  key={row.id}
                  className=" dark:border-none border-y  h-[49px]"
                  onClick={() => {}}
                >
                  {row.getVisibleCells().map((cell: any) => (
                    <td key={cell.id} className="px-[15px] text-left">
                      {cell.column.id === "action" && (
                        <TableActions
                          deleteRow={deleteRow}
                          editRow={editRow}
                          rowId={cell.row.original.id}
                        />
                      )}
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
        {!data.length ? (
          <div className="w-4/12 mx-auto flex justify-center  h-[60vh]">
            <div className="flex flex-col items-center mt-2">
              <ImFileEmpty size={40} />
              <p>No Data Found</p>
            </div>
          </div>
        ) : null}
        <div className="h-4" />
      </div>
      <div className="flex justify-between">
        <Pagination
          totalCount={pageCount}
          dataPerPage={pagination.pageSize}
          handlePageClick={handlePageClick}
          currentPage={currentPage}
        />
        <p>
          Page {pagination.pageIndex + 1} of
          {Math.ceil(pageCount / pagination.pageSize)}
        </p>
      </div>
    </>
  );
};

export default Table;

export const TableActions = ({ deleteRow, editRow, rowId }: any) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 cursor-pointer">
      <span onClick={() => navigate(`/edit/${rowId}`)}>
        <FaRegEdit onClick={editRow} className="text-blue-300" size={20} />
      </span>
      <span onClick={() => deleteRow(rowId)}>
        <RiDeleteBin5Line color="red" size={20} />
      </span>
    </div>
  );
};
