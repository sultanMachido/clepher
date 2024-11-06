import Toggle from "../components/toggle";
import angrySmiley from "../assets/images/reactions_angry.png";
import sadSmiley from "../assets/images/reactions_sad.png";
import laughSmiley from "../assets/images/reactions_haha.png";
import loveSmiley from "../assets/images/reactions_love.png";
import likeSmiley from "../assets/images/reactions_like.png";
import wowSmiley from "../assets/images/reactions_wow.png";
import Button from "../components/button";
import { useState } from "react";
import TextInput from "../components/form-kit/text-input";
import SelectInput from "../components/form-kit/select";
import Badge from "../components/badge";

const PostSettingsPage = () => {
  const [excludeKeywords, setExcludeKeywords] = useState<string[]>([]);
  const [triggerKeywords, setTriggerKeywords] = useState<string[]>([]);
  const [messageType, setMessageType] = useState("");

  const addExcludeKeywords = (text: string) => {
    if (excludeKeywords.includes(text)) {
      return;
    }
    const keywords = [...excludeKeywords];
    keywords.push(text);
    setExcludeKeywords(keywords);
  };

  const addTriggerKeywords = (text: string) => {
    if (triggerKeywords.includes(text)) {
      return;
    }
    const keywords = [...triggerKeywords];
    keywords.push(text);
    setTriggerKeywords(keywords);
  };

  const removeTriggerKeyword = (keyword: string) => {
    const filtered = triggerKeywords.filter((word) => word !== keyword);
    const keywords = [...filtered];
    setTriggerKeywords(keywords);
  };

  const removeExcludeKeyword = (keyword: string) => {
    const filtered = excludeKeywords.filter((word) => word !== keyword);
    const keywords = [...filtered];
    setExcludeKeywords(keywords);
  };

  return (
    <div className="p-[0.25rem]">
      <div className="block md:flex mt-2 justify-between">
        <p className="text-sm  font-bold ">
          Enable To Privately Reply To First-Level Comments Only
        </p>
        <Toggle />
      </div>
      <div className="block md:flex mt-2 justify-between">
        <p className="text-sm  font-bold">
          Send Message To The Same User Only Once Per Post
        </p>
        <Toggle />
      </div>
      <hr className="mt-2" />
      <div className="mt-5 block md:flex justify-between">
        <div className="">
          <p className="text-sm  font-bold">Require a Post Reaction</p>
          <div className="flex mt-2">
            <span className="flex flex-col gap-2">
              <img src={likeSmiley} alt="like smiley" />
              <input type="checkbox" />
            </span>
            <span className="flex flex-col gap-2 ">
              <img src={loveSmiley} alt="love smiley" />
              <input type="checkbox" />
            </span>
            <span className="flex flex-col gap-2">
              <img src={laughSmiley} alt="laugh Smiley" />
              <input type="checkbox" />
            </span>
            <span className="flex flex-col gap-2">
              <img src={wowSmiley} alt="wow smiley" />
              <input type="checkbox" />
            </span>
            <span className="flex flex-col gap-2">
              <img src={sadSmiley} alt="sad smiley" />
              <input type="checkbox" />
            </span>
            <span className="flex flex-col gap-2">
              <img src={angrySmiley} alt="angry smiley" />
              <input type="checkbox" />
            </span>
          </div>
        </div>
        <div className="mt-2 md:mt-0">
          <Button customStyle="dark:border-none bg-blue-400 p-2 rounded-md text-white">
            Require Reaction
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-sm pb-2">Exclude Comments With These Keywords</p>
        <div>
          <TextInput
            btnText="Add Keyword"
            inputStyle="w-8/12 md:w-4/12"
            placeholder=""
            addText={addExcludeKeywords}
          />
        </div>
        <div className="flex flex-wrap mx-2 my-2 gap-2">
          {excludeKeywords.length
            ? excludeKeywords.map((keyword) => (
                <Badge
                  text={keyword}
                  removeBadge={() => removeExcludeKeyword(keyword)}
                />
              ))
            : null}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm   pb-2">
          Only Trigger For Comments With These Keywords
        </p>
        <div>
          <TextInput
            btnText="Add Keyword"
            inputStyle="w-8/12 md:w-4/12"
            placeholder=""
            addText={addTriggerKeywords}
          />
        </div>
        <div className="flex flex-wrap mx-2 my-2 gap-2">
          {triggerKeywords.length
            ? triggerKeywords.map((keyword) => (
                <Badge
                  text={keyword}
                  removeBadge={() => removeTriggerKeyword(keyword)}
                />
              ))
            : null}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-sm  font-bold pb-2">
          Private Reply After Post Engagement
        </p>
        <hr className="w-9/12" />

        <div className="w-full md:w-[46%]">
          <p className="py-2">Select Message Type</p>
          <SelectInput
            change={(event: any) => {
              setMessageType(event.target.value);
            }}
          >
            <option value="flow">Flow</option>
            <option value="single message">Single Message</option>
          </SelectInput>
        </div>
        <div className="w-full md:w-[46%]">
          <p className="py-2">Select Flow</p>
          <SelectInput change={() => {}}>
            <option>Welcome Message</option>
            <option>Default Reply</option>
          </SelectInput>
        </div>
        {messageType === "single message" && (
          <div className="w-full md:w-[46%]">
            <p className="py-2">Select Message</p>
            <SelectInput>
              <option>Text card #1</option>
              <option>Text card #2</option>
            </SelectInput>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostSettingsPage;
