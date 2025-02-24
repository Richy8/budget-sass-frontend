type BlockIconType = {
  active: boolean;
  selected: (data: string) => void;
};

const BlockIcon = ({ active, selected }: BlockIconType) => {
  return (
    <div
      onClick={() => selected("treemap")}
      className={`action-wrapper w-[46px] h-[36px] flex justify-center items-center rounded-md  cursor-pointer transition duration-300 ease-in-out ${
        active ? "bg-teal-600" : "border border-grey-300/80"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`w-[18px] h-[18px] transition duration-300 ease-in-out ${
          active ? "text-white" : "text-neutral-600"
        }`}
      >
        <title>Show results in a treemap</title>
        <path
          fillRule="evenodd"
          d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default BlockIcon;
