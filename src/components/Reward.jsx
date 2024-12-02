import Button from "./Button";

function Reward({ title, price, content, numberLeft, outOfStock = false }) {
  return (
    <div
      className={`${outOfStock ? "opacity-50" : ""} rounded-lg border border-[#00000026] bg-white p-6 lg:px-8 lg:pb-8 lg:pt-[38px]`}
    >
      <div className="mb-6 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <h3 className="text-sm font-bold leading-none text-black lg:text-lg">
          {title}
        </h3>
        <p className="text-sm font-medium leading-none text-dark-cyan lg:text-[15px]">
          Pledge ${price} or more
        </p>
      </div>
      <p className="mb-6 text-sm leading-6 text-dark-gray lg:text-base lg:leading-[30px]">
        {content}
      </p>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <div className="flex items-center gap-2">
          <span className="text-[32px] font-bold leading-none text-black">
            {numberLeft}
          </span>
          <span className="text-[15px] leading-none text-dark-gray">left</span>
        </div>
        <Button disabled={outOfStock} className="w-full max-w-[157px]">
          {outOfStock ? "Out of Stock" : "Select Reward"}
        </Button>
      </div>
    </div>
  );
}
export default Reward;
