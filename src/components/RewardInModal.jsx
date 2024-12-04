import { useState } from "react";
import Button from "./Button";

function RewardInModal({
  title,
  price,
  content,
  numberLeft,
  outOfStock,
  pledgeWithReward,
  isChosenReward,
  onClick,
  onCompleted,
  onBacked,
  onSetNumberBacked,
}) {
  const [priceBacked, setPriceBacked] = useState(price);
  function handleButtonClicked() {
    onCompleted();
    onBacked();
    onSetNumberBacked(Number(priceBacked));
  }
  return (
    <div
      className={`${outOfStock ? "opacity-50" : ""} relative rounded-lg ${isChosenReward ? "border-2 border-moderate-cyan" : "border border-[#00000026] bg-white"} cursor-pointer`}
      onClick={() => !outOfStock && onClick(title)}
    >
      <div
        className={`${isChosenReward ? "pb-0" : "pb-6"} px-6 pt-6 lg:px-[28px] lg:pt-8`}
      >
        <div className="mb-4 flex items-center gap-4 lg:items-end lg:gap-6">
          <div className="relative size-6 cursor-pointer rounded-full border border-black/15 transition-colors hover:border-moderate-cyan">
            {isChosenReward && (
              <div className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-moderate-cyan"></div>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4">
            <h3 className="cursor-pointer text-sm font-bold leading-none text-black transition-colors hover:text-moderate-cyan lg:text-lg">
              {title}
            </h3>
            {pledgeWithReward && (
              <p className="text-sm font-medium leading-none text-moderate-cyan lg:text-[15px]">
                Pledge ${price} or more
              </p>
            )}
          </div>
        </div>

        <p className="text-sm leading-6 text-dark-gray lg:pl-12 lg:text-[15px] lg:leading-7">
          {content}
        </p>

        {pledgeWithReward && (
          <div className="mt-6 flex items-center gap-2 lg:absolute lg:right-[28px] lg:top-9 lg:mt-0">
            <span className="text-lg font-bold leading-none text-black">
              {numberLeft}
            </span>
            <span className="text-[15px] leading-none text-dark-gray">
              left
            </span>
          </div>
        )}
      </div>

      {isChosenReward && pledgeWithReward && (
        <>
          <div className="my-6 h-[1px] w-full bg-black/15 lg:mb-6 lg:mt-8"></div>
          <div className="flex flex-col items-center gap-4 px-6 pb-6 lg:flex-row lg:justify-between lg:gap-0 lg:px-[28px]">
            <h3 className="text-sm leading-7 text-dark-gray lg:text-[15px]">
              Enter your pledge
            </h3>
            <div className="relative flex items-center gap-4">
              <input
                type="number"
                min={price}
                className="h-12 w-[100px] rounded-[33.5px] border border-black/15 pl-10 text-sm font-bold text-black outline-none"
                value={priceBacked}
                onChange={(e) => setPriceBacked(e.target.value)}
              />
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-sm font-bold text-black opacity-25">
                $
              </span>

              <Button
                className="w-[115px] lg:w-[107px]"
                onClick={handleButtonClicked}
              >
                Continue
              </Button>
            </div>
          </div>
        </>
      )}
      {isChosenReward && !pledgeWithReward && (
        <>
          <div className="my-6 h-[1px] w-full bg-black/15 lg:mb-6 lg:mt-8"></div>
          <div className="mb-6 flex items-center justify-center">
            <Button
              className="w-[115px] lg:w-[107px]"
              onClick={handleButtonClicked}
            >
              Continue
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
export default RewardInModal;
