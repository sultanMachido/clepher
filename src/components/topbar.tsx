import logo from "../assets/images/hitune-logo.jpg";
import sheildIcon from "../assets/icons/shield-icon.svg";
import ballIcon from "../assets/icons/ball-icon.svg";
import profilePic from "../assets/images/profile-pic.jpeg";
import ToggleTheme from "./toggle-theme";
import Swap from "./swap";
import Drawer from "./drawer";

const Topbar = () => {
  return (
    <section className="dark:bg-bgBlackPrimary dark:border-none dark:text-white fixed z-20 w-full p-4 bg-white flex items-center justify-between border-b border-b-base-300 bg-base-100">
      <div className="flex gap-8 lg:gap-2">
        <div className="hidden lg:block">
          <img src={logo} alt="" className=" rounded-full w-10" />
        </div>
        <div className="block lg:hidden w-5">
          <Swap />
          <Drawer />
        </div>
        <div className="border rounded-md border-gray-200 px-2 py-[.32rem]">
          <a href="https://m.me/hitunezofficial">@hitunezofficial</a>
        </div>
      </div>
      <div className="flex items-center w-[22%] lg:w-[15%] justify-between">
        <div className="hidden  cursor-pointer w-10 h-10 rounded-full hover:bg-red-300 lg:flex justify-center items-center">
          <img
            src={sheildIcon}
            alt=""
            className="rounded-full w-[20px] h-[20px]"
          />
        </div>
        <div className="cursor-pointer w-10 h-10 rounded-full hover:bg-gray-200 flex justify-center items-center">
          <ToggleTheme />
        </div>
        <div className="hidden cursor-pointer w-10 h-10 rounded-full hover:bg-gray-200 lg:flex justify-center items-center">
          <img
            src={ballIcon}
            alt=""
            className="rounded-full w-[20px] h-[20px]"
          />
        </div>
        <div className="cursor-pointer hover:border-4 hover:border-gray-200 rounded-full w-10 h-10">
          <img src={profilePic} alt="" className="w-full h-full rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
