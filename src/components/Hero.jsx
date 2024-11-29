import { useState } from "react";
import iconCloseMenu from "../images/icon-close-menu.svg";
import iconHamburger from "../images/icon-hamburger.svg";
import logo from "../images/logo.svg";
function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="bg-hero-mobile lg:bg-hero-desktop h-[300px] w-full bg-[#929292] bg-cover bg-center bg-no-repeat bg-blend-multiply lg:h-[400px]">
      <nav className="relative mx-auto flex max-w-[1110px] items-center justify-between px-6 pt-8 lg:pt-12">
        {/* logo */}
        <img src={logo} alt="logo" />
        {/* logo */}

        {/* menu mobile */}
        <div className="lg:hidden">
          <img
            src={isMenuOpen ? iconCloseMenu : iconHamburger}
            alt="menu icon"
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {/* overlay */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"} bg-overlay-menu-mobile fixed left-0 top-0 -z-10 h-full w-full`}
            onClick={() => setIsMenuOpen(false)}
          />
          {/* overlay */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"} absolute left-0 top-[88px] w-full px-6`}
          >
            <div className="flex flex-col rounded-lg border border-[#0000000d] bg-white text-lg font-medium leading-none text-black">
              <a
                href="#"
                className="border-b border-[#2F2F2F] border-opacity-10 p-6"
              >
                About
              </a>
              <a
                href="#"
                className="border-b border-[#2F2F2F] border-opacity-10 p-6"
              >
                Discover
              </a>
              <a href="#" className="p-6">
                Get Started
              </a>
            </div>
          </div>
        </div>
        {/* menu mobile */}

        {/* menu desktop */}
        <ul className="hidden items-center gap-8 text-[13px] font-medium leading-none text-white lg:flex">
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Discover
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Get Started
            </a>
          </li>
        </ul>
        {/* menu desktop */}
      </nav>
    </section>
  );
}
export default Hero;
