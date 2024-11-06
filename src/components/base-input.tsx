import { ReactNode } from "react";

const BaseInput = ({
  children,
  customStyle,
}: {
  children: ReactNode;
  customStyle?: string;
}) => {
  return (
    <div
      className={`flex rounded-[5px] border border-[#E2E8F0] ${
        customStyle || ""
      }`}
    >
      {children}
    </div>
  );
};

export default BaseInput;
