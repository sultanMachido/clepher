import { useState } from "react";
import { ImFileEmpty } from "react-icons/im";

const SelectPost = () => {
  const [posts, _setPosts] = useState([]);

  if (!posts.length) {
    return (
      <div className="w-4/12 mx-auto flex justify-center items-center h-[60vh]">
        <div className="flex flex-col items-center mt-2">
          <ImFileEmpty size={40} />
          <p>No Post Found</p>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default SelectPost;
