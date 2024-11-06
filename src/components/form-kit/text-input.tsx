import { twMerge } from "tailwind-merge";
import Button from "../button";
import { useRef, useState } from "react";

type TextInputProps = {
  btnText?: string;
  placeholder: string;
  inputStyle: string;
  addText?: (text: string) => void;
  showButton?: boolean;
};
const TextInput = ({
  btnText,
  placeholder,
  inputStyle,
  addText,
  showButton = true,
}: TextInputProps) => {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);
  return (
    <div className="flex items-center h-[46px] w-full">
      <input
        className={twMerge(
          "rounded-l-md dark:text-black  rounded-r-[0px] border border-gray-200 h-full px-2",
          inputStyle
        )}
        ref={inputRef}
        placeholder={placeholder}
        type="text"
        onChange={(event) => {
          setInputText(event.target.value);
        }}
      />
      {showButton && (
        <Button
          customStyle="dark:border-none bg-blue-500 h-full text-white rounded-l-[0px]"
          click={() => {
            if (inputText) {
              addText?.(inputText);
              if (inputRef.current) {
                (inputRef.current as any).value = "";
              }
            }
          }}
        >
          {btnText}
        </Button>
      )}
    </div>
  );
};

export default TextInput;
