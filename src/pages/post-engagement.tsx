import { useEffect, useState } from "react";
import Table from "../components/table";
import { dummyTableData } from "../dummy-data";
import { PaginationState } from "@tanstack/react-table";
import SearchInput from "../components/form-kit/search-input";
import Dropdown, { DropdownList } from "../components/form-kit/dropdown";
import Filter, { useFilter } from "../components/filter";
import { motion } from "framer-motion";
import DateInput, { useDate } from "../components/form-kit/date-input";
import {
  debounce,
  getDataForDateRange,
  globalSearch,
  searchByColumn,
} from "../utils";
import { useRowSelection } from "../hooks/row-selectrion";
import { showModal } from "../components/modal";
import { toast } from "react-toastify";
import DeleteModal from "../components/delete-modal";
import LinkIcon from "../assets/icons/link-icon";
import { TabBody, TabList, useTab } from "../components/tab";
import JsonGeneratorIcon from "../assets/icons/json-gen-icon";
import CheckboxIcon from "../assets/icons/checkbox-icon";
import MessengerIcon from "../assets/icons/messanger-icon";
import PostEngagementIcon from "../assets/icons/post-engagement-icon";
import SendMessageIcon from "../assets/icons/send-message-icon";

const tabInfo = [
  {
    tabNumber: 0,
    tabTitle: "Links Library",
    tabIcon: <LinkIcon />,
  },
  {
    tabNumber: 1,
    tabTitle: "JSON Generator",
    tabIcon: <JsonGeneratorIcon />,
  },
  {
    tabNumber: 2,
    tabTitle: "Checkbox Plugin",
    tabIcon: <CheckboxIcon />,
  },
  {
    tabNumber: 3,
    tabTitle: "Messenger Code",
    tabIcon: <MessengerIcon />,
  },
  {
    tabNumber: 4,
    tabTitle: "Post Engagement",
    tabIcon: <PostEngagementIcon />,
  },
  {
    tabNumber: 5,
    tabTitle: "Send To Messenger",
    tabIcon: <SendMessageIcon />,
  },
];

export const PostEngagementPageContainer = () => {
  const tabMethods = useTab();
  return (
    <section>
      <div className="w-11/12 md:w-10/12 mx-auto mt-4">
        <TabList tabData={tabInfo} {...tabMethods} />
        <TabBody tabNumber={0} currentTab={tabMethods.currentTab}>
          <p className="dark:text-white text-center font-bold text-red-500">
            This page is under Construction.Navigate To Post Engagement Tab
          </p>
        </TabBody>
        <TabBody tabNumber={4} currentTab={tabMethods.currentTab}>
          <PostEngagementPage />
        </TabBody>
      </div>
    </section>
  );
};

const PostEngagementPage = () => {
  const [tableData, setTableData] = useState(dummyTableData);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [searchResultPagination, setSearchResultPagination] =
    useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });
  const [searchedDataNotFound, setSearchedDataNotFound] = useState(false);
  const [singleRecordId, setSingleRecordId] = useState(0);

  const { rowSelection, setRowSelection } = useRowSelection();
  const {
    addFilterCriteria,
    filterBy,
    openDateFilter,
    filteredData,
    addFilteredData,
  } = useFilter();
  const { selectedDate: fromDate, addDate: addFromDate } = useDate();
  const { selectedDate: toDate, addDate: addToDate } = useDate();
  useEffect(() => {
    if (fromDate && toDate) {
      getDataForDateRange(fromDate, toDate, tableData, addFilteredData);
    }
  }, [fromDate, toDate]);

  const dateFilterVariants = {
    open: {
      height: "130px",
      display: "flex",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
    closed: {
      height: "0px",
      display: "none",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  const deleteSingleRecord = () => {
    if (filteredData) {
      const recordsAfterDeletion = tableData.filter(
        (record) => record.id !== singleRecordId
      );
      addFilteredData(recordsAfterDeletion);
      setTableData(recordsAfterDeletion);
      return;
    }

    const recordsAfterDeletion = tableData.filter(
      (record) => record.id !== singleRecordId
    );
    setTableData(recordsAfterDeletion);
  };

  const deleteRecord = () => {
    if (!Object.values(rowSelection).length) {
      toast("Select a record before deleting", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (!tableData.length) {
      toast("No record to delete", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const selectedRecordsId = Object.keys(rowSelection);
    if (filteredData) {
      const recordsAfterDeletion = tableData.filter(
        (record) =>
          !selectedRecordsId.map((id) => Number(id)).includes(record.id)
      );
      addFilteredData(recordsAfterDeletion);
      setTableData(recordsAfterDeletion);
      return;
    }
    const recordsAfterDeletion = tableData.filter(
      (record) => !selectedRecordsId.map((id) => Number(id)).includes(record.id)
    );
    setTableData(recordsAfterDeletion);
  };

  const searchHandler = debounce((event: any) => {
    let searchValue = event.target.value;
    if (filterBy) {
      searchByColumn(
        tableData,
        searchValue,
        filterBy,
        addFilteredData,
        setSearchedDataNotFound
      );
    } else {
      globalSearch(
        tableData,
        searchValue,
        addFilteredData,
        setSearchedDataNotFound
      );
    }
  }, 1000);

  let tableToDisplay;

  if (!tableData.length) {
    tableToDisplay = (
      <Table
        data={tableData}
        pageCount={tableData?.length}
        pagination={pagination}
        setPagination={setPagination}
        currentPage={pagination?.pageIndex}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    );
  } else if (searchedDataNotFound) {
    tableToDisplay = (
      <Table
        data={[]}
        pageCount={[]}
        pagination={pagination}
        setPagination={setPagination}
        currentPage={pagination?.pageIndex}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    );
  } else if (filteredData.length) {
    tableToDisplay = (
      <Table
        data={filteredData}
        pageCount={filteredData.length}
        pagination={searchResultPagination}
        setPagination={setSearchResultPagination}
        currentPage={searchResultPagination?.pageIndex}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        deleteRow={(rowId: number) => {
          setSingleRecordId(rowId);
          showModal("deleteModal2");
        }}
      />
    );
  } else {
    tableToDisplay = (
      <Table
        data={tableData}
        pageCount={tableData.length}
        pagination={pagination}
        setPagination={setPagination}
        currentPage={pagination?.pageIndex}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        deleteRow={(rowId: number) => {
          setSingleRecordId(rowId);
          showModal("deleteModal2");
        }}
      />
    );
  }

  return (
    <>
      <div className="dark:text-white mt-10">
        <DeleteModal deleteRecord={deleteRecord} modalId="deleteModal1" />
        <DeleteModal deleteRecord={deleteSingleRecord} modalId="deleteModal2" />
        <div className="block md:flex justify-between mb-5">
          <h3 className=" text-xl">Post Engagements</h3>
          <div className="block md:flex gap-2 items-center">
            <p className="text-sm">
              Filtering By:<span className="font-bold">{filterBy}</span>
            </p>
            <div className="my-2 md:my-0">
              <SearchInput change={searchHandler} />
            </div>
            <div className="my-2 md:my-0">
              <Dropdown text="Bulk Actions">
                <DropdownList
                  value="delete"
                  click={() => showModal("deleteModal1")}
                >
                  <p>Delete</p>
                </DropdownList>
              </Dropdown>
              <Filter addFilterCriteria={addFilterCriteria} />
            </div>
          </div>
        </div>
        <motion.div
          animate={openDateFilter ? "open" : "closed"}
          variants={dateFilterVariants}
          initial="closed"
          className="flex justify-end w-full"
        >
          <div className="w-full md:w-3/12">
            <p className="text-sm font-bold">From:</p>
            <DateInput selectDate={addFromDate} />
            <p className="text-sm font-bold pt-2">To:</p>
            <DateInput selectDate={addToDate} />
          </div>
        </motion.div>
        <div className="relative z-[0] overflow-x-scroll">{tableToDisplay}</div>
      </div>
    </>
  );
};

export default PostEngagementPage;
