import BufferIcon from "../assets/icons/buffer-icon";
import ChartIcon from "../assets/icons/chart-icon";
import CommentIcon from "../assets/icons/comment-icon";
import DashboardIcon from "../assets/icons/dashboard-icon";
import HorseShoeIcon from "../assets/icons/horse-shoe-icon";
import PeopleIcon from "../assets/icons/people-icon";
import SettingsIcon from "../assets/icons/settings-icon";
import SpeakerIcon from "../assets/icons/speaker-icon";
import WandIcon from "../assets/icons/wand-icon";
import { SidebarLinks } from "./sidebar";

const Drawer = () => {
  const isOpen = true;
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}

        {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
         
        </label> */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          {/* <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li> */}
          <ul className="mt-5 px-2">
            <li className={`cursor-pointer`}>
              <SidebarLinks
                LinkIcon={DashboardIcon}
                isOpen={isOpen}
                title="Dashboard"
                path="/#"
              />
            </li>
            <li className={`cursor-pointer `}>
              <SidebarLinks
                LinkIcon={PeopleIcon}
                isOpen={isOpen}
                title="Audience"
                path="/#"
              />
            </li>
            <li className={`cursor-pointer `}>
              <SidebarLinks
                LinkIcon={CommentIcon}
                isOpen={isOpen}
                title="Dashboard"
                path="/#"
              />
            </li>
            <li className={`cursor-pointer `}>
              <SidebarLinks
                LinkIcon={HorseShoeIcon}
                isOpen={isOpen}
                title="Capture Tools"
                path="/"
              />
            </li>
            <li className={` cursor-pointer `}>
              <SidebarLinks
                LinkIcon={SpeakerIcon}
                isOpen={isOpen}
                title="Dashboard"
                path="/#"
              />
            </li>
            <li className={`cursor-pointer `}>
              <SidebarLinks
                LinkIcon={WandIcon}
                isOpen={isOpen}
                title="Dashboard"
                path="/#"
              />
            </li>
            <li className={` cursor-pointer `}>
              <SidebarLinks
                LinkIcon={BufferIcon}
                isOpen={isOpen}
                title="Dashboard"
                path="/#"
              />
            </li>
            <li className={` cursor-pointer `}>
              <SidebarLinks
                LinkIcon={ChartIcon}
                isOpen={isOpen}
                title="Statistics"
                path="/statistics"
              />
            </li>
            <li className={` cursor-pointer pb-10`}>
              <SidebarLinks
                LinkIcon={SettingsIcon}
                isOpen={isOpen}
                title="Settings"
                path="/settings"
              />
            </li>
            {/* <li
              className="flex items-center p-4 cursor-pointer "
              onClick={toggleNav}
            >
              {isOpen ? (
                <img src={collapseIcon} alt="" />
              ) : (
                <img src={collapseIconClosed} alt="" />
              )}

              <motion.span variants={linkVariants}>
                {isOpen && (
                  <span className="ml-4">
                    <p className="text-[14px]">Collapse</p>
                  </span>
                )}
              </motion.span>
            </li> */}
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
