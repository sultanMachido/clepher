import { useState } from "react";
import SelectInput from "../components/form-kit/select";
import Toggle from "../components/toggle";
import TextInput from "../components/form-kit/text-input";
import Button from "../components/button";

let inputCount = 0;
const AutoResponsePage = () => {
  const [commentType, setCommentType] = useState("static");
  const [staticInputs, setStaticInputs] = useState<{ [key: string]: string }[]>(
    []
  );

  const addNewComment = () => {
    const newInput = [...staticInputs];
    const inputValue = {
      id: `#${inputCount++}`,
    };
    newInput.push(inputValue);
    setStaticInputs(newInput);
  };

  const removeComment = (inputId: string) => {
    const copyInputs = [...staticInputs];
    const inputs = copyInputs.filter((input) => input.id !== inputId);

    setStaticInputs(inputs);
  };

  return (
    <section className="p-[0.25rem] md:p-5">
      <div className="block md:flex mt-2 justify-between">
        <p className="text-sm  font-bold ">
          Enable To Automatically Like Comments
        </p>
        <Toggle />
      </div>
      <div className="mt-5">
        <p className="text-sm  font-bold pb-2">Reply in Comments</p>
        <hr className="w-9/12" />

        <div className="w-full md:w-[46%]">
          <p className="py-2">Comment Type</p>
          <SelectInput
            change={(event: any) => {
              setCommentType(event?.target.value);
            }}
          >
            <option value="static">Static</option>
            <option value="open ai">Open AI</option>
          </SelectInput>
        </div>
      </div>
      <div className="mt-2">
        {commentType === "static" && (
          <>
            {staticInputs.map((input) => (
              <div
                className="w-full md:w-[46%] dark:bg-black bg-[#f2f7ff] flex items-center p-2 my-2"
                key={input.id}
              >
                <p>{input.id}</p>
                <TextInput
                  inputStyle="w-[98%] h-[47px]"
                  showButton={false}
                  placeholder={input.id}
                />
                <button
                  className="hover:bg-gray-200 w-[40px] text-center h-[40px] p-2 rounded-full"
                  onClick={() => removeComment(input.id)}
                >
                  <p>X</p>
                </button>
              </div>
            ))}
            <div className="mx-auto w-full mt-2">
              <Button
                customStyle="bg-blue-400 text-white"
                click={addNewComment}
              >
                Add Comment
              </Button>
            </div>
          </>
        )}
        {commentType === "open ai" && (
          <div>
            <div className="w-full md:w-[46%]">
              <p className="py-2">Select Integration</p>
              <SelectInput change={() => {}}>
                <option value="integration 1">Integration 1</option>
                <option value="integration 2">Integration 2</option>
              </SelectInput>
            </div>
            <div className="w-full md:w-[46%]">
              <p className="py-2">Select Assitance</p>
              <SelectInput change={() => {}}>
                <option value="assitance 1">Assitance 1</option>
                <option value="assitance 2">Assitance 2</option>
              </SelectInput>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AutoResponsePage;
