import { ReactNode, useState } from "react";

type TabItemProps = {
  // children: ReactNode;
  changeTab: (tabNumber: number) => void;
  tabNumber: number;
  isActiveTab: (tabNumber: number, currentTab: number) => string;
  currentTab: number;
  customStyle?: string;
  tabIcon: ReactNode;
  tabTitle: string;
};

type TabListProps = {
  tabData: { [key: string]: any }[];
  currentTab: number;
  changeTab: (tabNumber: number) => void;
  isActiveTab: (tabNumber: number, currentTab: number) => string;
};

const Tab = ({ children }: { children: ReactNode }) => {
  return (
    <div
      role="tablist"
      className="tabs tabs-boxed overflow-x-scroll p-[14px] md:p-auto"
    >
      {children}
    </div>
  );
};

export default Tab;

export const TabItem = ({
  changeTab,
  customStyle,
  isActiveTab,
  currentTab,
  tabNumber,
  tabIcon,
  tabTitle,
}: TabItemProps) => {
  const activeStyle = isActiveTab(tabNumber, currentTab);

  return (
    <div
      className={`tab flex min-w-[182px] md:min-w-0  ${activeStyle} ${customStyle}`}
      onClick={() => changeTab(tabNumber)}
    >
      {tabIcon}
      <p>{tabTitle}</p>
    </div>
  );
};

export const TabList = ({
  tabData,
  currentTab,
  changeTab,
  isActiveTab,
}: TabListProps) => {
  return (
    <Tab>
      {tabData.map((data) => (
        <TabItem
          tabNumber={data.tabNumber}
          tabIcon={data.tabIcon}
          tabTitle={data.tabTitle}
          currentTab={currentTab}
          changeTab={changeTab}
          isActiveTab={isActiveTab}
        />
      ))}
    </Tab>
  );
};

export const TabBody = ({
  currentTab,
  tabNumber,
  children,
}: {
  currentTab: number;
  tabNumber: number;
  children: ReactNode;
}) => {
  if (currentTab !== tabNumber) {
    return <></>;
  }
  return <div className="">{children}</div>;
};

export const useTab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const changeTab = (tabNumber: number) => {
    setCurrentTab(tabNumber);
  };

  const isActiveTab = (tabNumber: number, currentTab: number) => {
    if (tabNumber !== currentTab) {
      return "";
    }
    return "bg-black rounded-md text-white";
  };

  return {
    currentTab,
    changeTab,
    isActiveTab,
  };
};
