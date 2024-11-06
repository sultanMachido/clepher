const Swap = () => {
  return (
    <label
      htmlFor="my-drawer"
      className="btn btn-circle w-[48px] h-[0px] lg:w-10 h-10 swap swap-rotate"
    >
      <input type="checkbox" />

      {/* hamburger icon */}
      <svg
        className="swap-off w-5 h-5  fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>

      {/* close icon */}
      <svg
        className="swap-on  w-5 h-5   fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
      </svg>
    </label>
  );
};

export default Swap;
