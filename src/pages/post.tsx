import TextInput from "../components/form-kit/text-input";

const Post = () => {
  return (
    <section className="h-[60vh]">
      <div className="w-11/12 md:w-6/12 mx-auto mt-[100px]">
        <TextInput btnText="Grab Post" inputStyle="w-full" placeholder="" />
      </div>
    </section>
  );
};

export default Post;
