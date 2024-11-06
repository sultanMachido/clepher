import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  customStyle: string;
  click?: () => void;
};

const Button = ({ children, customStyle, click }: ButtonProps) => {
  return (
    <button className={twMerge("btn ", customStyle)} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
