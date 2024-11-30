import Box from "./components/Box";
import Hero from "./components/Hero";
import logoMastercraft from "./images/logo-mastercraft.svg";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [isHoverBookmark, setIsHoverBookmark] = useState(false);
  return (
    <div className="min-h-dvh bg-[#fafafa]">
      {/* hero */}
      <Hero />
      {/* hero */}

      {/* main */}
      <section className="mx-auto -mt-14 flex max-w-[730px] flex-col gap-6 lg:-mt-[88px]">
        <Box>
          <img
            src={logoMastercraft}
            alt="logo mastercraft"
            className="absolute -top-7 left-1/2 -translate-x-1/2"
          />
          <h2 className="mb-4 mt-[52px] px-2 text-center text-xl font-bold leading-none text-black lg:mt-14 lg:px-0">
            Mastercraft Bamboo Monitor Riser
          </h2>
          <p className="mb-6 text-center text-sm leading-6 text-dark-gray lg:mb-10 lg:text-base lg:leading-none">
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="flex w-full items-center justify-between gap-2">
            <Button px="px-[42px] lg:px-10" py="py-5" fontSize="text-base">
              Back this project
            </Button>
            <div
              className="relative cursor-pointer lg:w-[174px]"
              onMouseEnter={() => setIsHoverBookmark(true)}
              onMouseLeave={() => setIsHoverBookmark(false)}
            >
              <div className="absolute left-0 top-0 hidden h-14 w-full items-center justify-end rounded-[33.5px] bg-[#2f2f2f] bg-opacity-5 pr-6 font-bold leading-none text-dark-gray lg:flex">
                Bookmark
              </div>
              <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <circle
                    fill={`${!isHoverBookmark ? "#2f2f2f" : "#707070"}`}
                    cx="28"
                    cy="28"
                    r="28"
                  />
                  <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                </g>
              </svg>
            </div>
          </div>
        </Box>
        <Box></Box>
        <Box></Box>
      </section>
      {/* main */}
    </div>
  );
}
export default App;
