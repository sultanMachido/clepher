import CheckboxIcon from "../assets/icons/checkbox-icon";
import JsonGeneratorIcon from "../assets/icons/json-gen-icon";
import LinkIcon from "../assets/icons/link-icon";
import MessengerIcon from "../assets/icons/messanger-icon";
import Breadcrumbs from "../components/breadcrumbs";
import { TabBody, TabList, useTab } from "../components/tab";
import AutoResponsePage from "./auto-response-page";
import Post from "./post";
import PostSettingsPage from "./post-settings-page";
import SelectPost from "./select-post";

const tabInfo = [
  {
    tabNumber: 0,
    tabTitle: "Settings",
    tabIcon: <LinkIcon />,
  },
  {
    tabNumber: 1,
    tabTitle: "Auto Response",
    tabIcon: <JsonGeneratorIcon />,
  },
  {
    tabNumber: 2,
    tabTitle: "Select A Post",
    tabIcon: <CheckboxIcon />,
  },
  {
    tabNumber: 3,
    tabTitle: "Post ID/ URL",
    tabIcon: <MessengerIcon />,
  },
];

const EditPage = () => {
  const tabMethods = useTab();

  return (
    <section>
      <div className="w-[95%] md:w-10/12  mx-auto mt-10">
        <Breadcrumbs />
        <div className="min-w-[408px]">
          <TabList tabData={tabInfo} {...tabMethods} />
        </div>
        <div className="dark:bg-[#6A6676] dark:text-white bg-white w-full p-2">
          <TabBody tabNumber={0} currentTab={tabMethods.currentTab}>
            <PostSettingsPage />
          </TabBody>
          <TabBody tabNumber={1} currentTab={tabMethods.currentTab}>
            <AutoResponsePage />
          </TabBody>
          <TabBody tabNumber={2} currentTab={tabMethods.currentTab}>
            <SelectPost />
          </TabBody>
          <TabBody tabNumber={3} currentTab={tabMethods.currentTab}>
            <Post />
          </TabBody>
        </div>
      </div>
    </section>
  );
};

export default EditPage;
