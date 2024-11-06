import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import ToggleTheme from "./toggle-theme";
import collapseIcon from "../assets/icons/collapse-icon.svg";
import collapseIconClosed from "../assets/icons/collapse-closed-icon.svg";
import { matchPath, useLocation } from "react-router-dom";
import HorseShoeIcon from "../assets/icons/horse-shoe-icon";
import DashboardIcon from "../assets/icons/dashboard-icon";
import PeopleIcon from "../assets/icons/people-icon";
import CommentIcon from "../assets/icons/comment-icon";
import WandIcon from "../assets/icons/wand-icon";
import SpeakerIcon from "../assets/icons/speaker-icon";
import BufferIcon from "../assets/icons/buffer-icon";
import ChartIcon from "../assets/icons/chart-icon";
import SettingsIcon from "../assets/icons/settings-icon";
import { NavLink } from "react-router-dom";

type SidebarLinksProps = {
  isOpen: boolean;
  LinkIcon: (color: { color: string }) => ReactNode;
  title: string;
  path: string;
};

export const SidebarLinks = ({
  isOpen,
  LinkIcon,
  title,
  path,
}: SidebarLinksProps) => {
  const linkVariants = {
    open: {
      opacity: 1,
      display: "flex",
      transition: {
        delay: 0.2,
      },
    },
    closed: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  const location = useLocation();

  const MotionNavLink = motion(NavLink);

  const getActivePageStyle = (path: string) => {
    return matchPath(path === "/" ? "/*" : path + "/*", location?.pathname)
      ? "bg-black text-white hover:bg-none"
      : "";
  };

  const activePageStyle = getActivePageStyle(path);
  const linkAlignment = isOpen ? "" : "justify-center";
  return (
    <div
      className={`flex hover:bg-gray-300  rounded-sm items-center ${
        isOpen ? "py-4 px-4" : "py-4 px-2"
      } ${linkAlignment} ${activePageStyle}`}
    >
      <LinkIcon
        color={matchPath(path + "/*", location?.pathname) ? "white" : ""}
      />
      <MotionNavLink
        variants={linkVariants}
        className="flex items-center"
        to={path}
      >
        {isOpen && (
          <span className="ml-4">
            <p className="text-[14px]">{title}</p>
          </span>
        )}
      </MotionNavLink>
    </div>
  );
};

const CollapsibleSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    open: {
      width: "240px",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
    closed: {
      width: "60px",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
      },
    },
  };

  const linkVariants = {
    open: {
      opacity: 1,
      display: "flex",
      transition: {
        delay: 0.2,
      },
    },
    closed: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div className="flex static">
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={navVariants}
        className="hidden lg:block h-screen overflow-hidden dark:text-white text-textBlack dark:border-none border border-[#F1F5F9] dark:bg-bgBlackPrimary bg-white"
        initial="open"
      >
        <div className="p-4"></div>
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
          <li
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
          </li>
        </ul>
        <span className="mt-2">
          <div className="pl-5">
            <ToggleTheme />
          </div>
        </span>
      </motion.nav>
    </div>
  );
};

export default CollapsibleSidebar;
