import { twMerge } from "tailwind-merge";

const Badge = ({
  text,
  customStyle,
  removeBadge,
}: {
  text: string;
  customStyle?: string;
  removeBadge: (val: string) => void;
}) => {
  return (
    <div
      className={twMerge(
        "badge badge-info gap-2 p-[15px] bg-[#deeefe] ",
        customStyle
      )}
    >
      <p>{text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-4 w-4 stroke-current"
        onClick={() => removeBadge(text)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
  );
};

export default Badge;
