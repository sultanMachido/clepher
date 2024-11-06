const BufferIcon = ({ color }: { color: string }) => {
  return (
    <svg
      stroke="currentColor"
      fill={color || "none"}
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="h-[20px] w-[20px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
      <polyline points="2 17 12 22 22 17"></polyline>
      <polyline points="2 12 12 17 22 12"></polyline>
    </svg>
  );
};

export default BufferIcon;
