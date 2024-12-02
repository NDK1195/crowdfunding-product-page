import Box from "./components/Box";
import Hero from "./components/Hero";
import logoMastercraft from "./images/logo-mastercraft.svg";
import Button from "./components/Button";
import { useState } from "react";
import Reward from "./components/Reward";

function App() {
  const [isHoverBookmark, setIsHoverBookmark] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
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
            <Button
              className="w-full max-w-[214px] lg:max-w-[204px]"
              py="py-5"
              fontSize="text-base"
            >
              Back this project
            </Button>
            <div
              className={`relative cursor-pointer ${isBookmarked ? "lg:w-[190px]" : "lg:w-[174px]"}`}
              onMouseEnter={() => setIsHoverBookmark(true)}
              onMouseLeave={() => setIsHoverBookmark(false)}
              onClick={() => setIsBookmarked(!isBookmarked)}
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
        <Box>
          <div className="mb-8 mt-8 flex flex-col items-center lg:mb-9 lg:mt-12 lg:flex-row">
            <div className="mb-6 text-center lg:mb-0 lg:mr-11 lg:text-left">
              <h3 className="mb-2 text-[32px] font-bold leading-none text-black">
                $89,914
              </h3>
              <p className="text-sm leading-none text-dark-gray lg:text-[15px]">
                of $100,000 backed
              </p>
            </div>
            <div className="mb-6 h-[1px] w-20 bg-black bg-opacity-15 lg:mb-0 lg:mr-12 lg:h-[63px] lg:w-[1px]"></div>
            <div className="mb-6 text-center lg:mb-0 lg:mr-[91px] lg:text-left">
              <h3 className="mb-2 text-[32px] font-bold leading-none text-black">
                5,007
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
          <div className="relative h-3 w-full rounded-[33.5px] bg-[#2f2f2f] bg-opacity-5">
            <div className="absolute h-full w-1/2 rounded-[33.5px] bg-moderate-cyan"></div>
          </div>
        </Box>
        <Box>
          <div className="mb-9 mt-10 lg:mb-10 lg:mt-12">
            <h2 className="mb-6 text-lg font-bold leading-none text-black lg:mb-9 lg:text-xl">
              About this project
            </h2>
            <div className="text-sm leading-6 text-dark-gray lg:text-base lg:leading-[30px]">
              <p className="mb-9 lg:mb-10">
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at
                work, helping you stay focused on the task at hand.
              </p>
              <p>
                Featuring artisan craftsmanship, the simplicity of design
                creates extra desk space below your computer to allow notepads,
                pens, and USB sticks to be stored under the stand.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <Reward
              title="Bamboo Stand"
              price={25}
              content="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
              numberLeft={101}
            />
            <Reward
              title="Black Edition Stand"
              price={75}
              content="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              numberLeft={64}
            />
            <Reward
              title="Mahogany Special Edition"
              price={200}
              content="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              numberLeft={0}
              outOfStock={true}
            />
          </div>
        </Box>
      </section>
      {/* main */}
    </div>
  );
}
export default App;
