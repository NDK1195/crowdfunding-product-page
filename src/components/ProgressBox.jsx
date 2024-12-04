import Box from "./Box";
function ProgressBox({ numberBacked, backers }) {
  const progressPercent = (numberBacked / 100000) * 100;

  return (
    <Box>
      <div className="mb-8 mt-8 flex flex-col items-center lg:mb-9 lg:mt-12 lg:flex-row">
        <div className="mb-6 text-center lg:mb-0 lg:mr-11 lg:text-left">
          <h3 className="mb-2 text-[32px] font-bold leading-none text-black">
            ${new Intl.NumberFormat("en-US").format(numberBacked)}
          </h3>
          <p className="text-sm leading-none text-dark-gray lg:text-[15px]">
            of $100,000 backed
          </p>
        </div>
        <div className="mb-6 h-[1px] w-20 bg-black bg-opacity-15 lg:mb-0 lg:mr-12 lg:h-[63px] lg:w-[1px]"></div>
        <div className="mb-6 text-center lg:mb-0 lg:mr-[91px] lg:text-left">
          <h3 className="mb-2 text-[32px] font-bold leading-none text-black">
            {backers}
          </h3>
          <p className="text-sm leading-none text-dark-gray lg:text-[15px]">
            total backers
          </p>
        </div>
        <div className="mb-6 h-[1px] w-20 bg-black bg-opacity-15 lg:mb-0 lg:mr-12 lg:h-[63px] lg:w-[1px]"></div>
        <div className="mb-6 text-center lg:mb-0 lg:mr-11 lg:text-left">
          <h3 className="mb-2 text-[32px] font-bold leading-none text-black">
            56
          </h3>
          <p className="text-sm leading-none text-dark-gray lg:text-[15px]">
            days left
          </p>
        </div>
      </div>
      {/* progress bar */}
      <div className="relative h-3 w-full rounded-[33.5px] bg-[#2f2f2f] bg-opacity-5">
        <div
          className={`absolute h-full rounded-[33.5px] bg-moderate-cyan`}
          style={{
            width: `${progressPercent >= 100 ? 100 : progressPercent}%`,
          }}
        ></div>
      </div>
      {/* progress bar */}
    </Box>
  );
}
export default ProgressBox;
