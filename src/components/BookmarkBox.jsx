import Box from "./Box";
import Button from "./Button";
import logoMastercraft from "../images/logo-mastercraft.svg";

function BookmarkBox({
  isBookmarked,
  isHoverBookmark,
  onMouseEnter,
  onMouseLeave,
  onClickBookmark,
  onClickBack,
}) {
  return (
    <Box>
      <img
        src={logoMastercraft}
        alt="logo mastercraft"
        className="absolute -top-7 left-1/2 -translate-x-1/2"
      />
      <h2 className="mb-4 mt-[52px] px-2 text-center text-xl font-bold leading-none text-black lg:mt-14 lg:px-0 lg:text-[28px]">
        Mastercraft Bamboo Monitor Riser
      </h2>
      <p className="mb-6 text-center text-sm leading-6 text-dark-gray lg:mb-10 lg:text-base lg:leading-none">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex w-full items-center justify-between gap-2">
        <Button
          className="w-full max-w-[214px] lg:max-w-[204px]"
          py="py-5"
          fontSize="text-base"
          onClick={onClickBack}
        >
          Back this project
        </Button>
        <div
          className={`relative cursor-pointer ${isBookmarked ? "lg:w-[190px]" : "lg:w-[174px]"}`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClickBookmark}
        >
          <div
            className={`${isBookmarked ? "bg-dark-cyan text-dark-cyan" : "bg-[#2f2f2f] text-dark-gray"} absolute left-0 top-0 hidden h-14 w-full items-center justify-end rounded-[33.5px] bg-opacity-5 pr-6 font-bold leading-none lg:flex`}
          >
            {isBookmarked ? "Bookmarked" : "Bookmark"}
          </div>
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle
                fill={`${!isHoverBookmark ? (isBookmarked ? "#147A73" : "#2f2f2f") : "#707070"}`}
                cx="28"
                cy="28"
                r="28"
              />
              <path
                fill={`${isBookmarked ? "white" : "#B1B1B1"}`}
                d="M23 19v18l5-5.058L33 37V19z"
              />
            </g>
          </svg>
        </div>
      </div>
    </Box>
  );
}
export default BookmarkBox;
