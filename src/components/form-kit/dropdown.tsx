import { ReactNode, useState } from "react";

type DropdownProps = {
  children: ReactNode;
  text: string;
};

type DropdownListProps = {
  children: ReactNode;
  click: (value: string) => void;
  value: string;
};

export const DropdownList = ({ children, click, value }: DropdownListProps) => {
  return (
    <li role="menuitem" onClick={() => click(value)}>
      {children}
    </li>
  );
};

const Dropdown = ({ children, text }: DropdownProps) => {
  const [showList, setShowList] = useState(false);

  const toggleShowList = () => {
    setShowList(!showList);
  };
  return (
    <div role="listbox" className=" ml-10 md:ml-0 dropdown dropdown-end">
      <label tabIndex={0}>
        <button
          className="dark:text-white btn btn-sm btn-outline"
          onClick={toggleShowList}
          onBlur={(event) => {
            event.preventDefault();
            setTimeout(() => setShowList(false), 1000);
          }}
        >
          {text}
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            className={`h-4 w-4 ${showList ? "rotate-180" : ""}`}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m11.998 17 7-8h-14z"></path>
          </svg>
        </button>
      </label>
      {showList && (
        <ul
          tabIndex={0}
          className="dark:text-black dropdown-content menu p-2 shadow bg-base-100 rounded-box menu-sm z-[1] mt-1 w-48"
          role="menu"
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
