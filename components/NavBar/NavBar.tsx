import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MobileHamburgerMenuIcon, UserIcon } from "../Icons";

interface Iprops {
  pageRoute: string;
}
const NavBar = ({ pageRoute }: Iprops) => {
  const [navbarColor, setNavbarColor] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const handleScroll = () => {
    const screenHeight = window.innerHeight;
    if (window.scrollY > screenHeight) {
      setNavbarColor("bg-black shadow-xl"); // Change to your desired color
    } else {
      setNavbarColor(""); // Change to your default color
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* desktop nav */}
      <div
        className={`w-full ${navbarColor} hidden transition-all duration-500 fixed z-50 lg:flex items-center gap-x-10 justify-around py-[23px] px-[81px]`}
      >
        <div className="flex 1/3 gap-x-10">
          <div className="font-medium text-white text-[20px] cursor-pointer">
            Resturants
          </div>
          <div
            className={` ${
              pageRoute == "/" && "border-b-[5px] border-white rounded-sm"
            } font-medium text-white text-[20px] cursor-pointer`}
          >
            Home
          </div>
          <div className="font-medium text-white text-[20px] cursor-pointer">
            Room
          </div>
          <div className="font-medium text-white text-[20px] cursor-pointer">
            Spa
          </div>
        </div>
        <div className="flex flex-col gap-y-3 justify-center items-center 1/3">
          <Image src={"/icon.png"} height={50} width={50} alt="" />
          <p className="font-semibold text-[23px] text-white text-center">
            The Daisy Dreams
          </p>
        </div>
        <div className="flex 1/3 gap-x-10">
          <div className="font-medium text-white text-[20px] cursor-pointer">
            Events
          </div>
          <div className="font-medium text-white text-[20px] cursor-pointer">
            About Us
          </div>
          <div className="font-medium text-white text-[20px] cursor-pointer">
            Contact
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`w-full ${navbarColor} flex transition-all duration-500 fixed z-50 lg:hidden  items-center gap-x-5 justify-around py-[25px]`}
      >
        <div
          onClick={() => {
            setMobileNavOpen((p) => !p);
          }}
          className="1/3"
        >
          {" "}
          <MobileHamburgerMenuIcon />{" "}
        </div>
        <div className="flex flex-col gap-y-3 justify-center items-center 1/3">
          <Image src={"/icon.png"} height={50} width={50} alt="" />
          <p className="font-semibold text-white text-center">
            The Daisy Dreams
          </p>
        </div>
        <div className="1/3">
          <UserIcon />
        </div>
      </div>

      {/* Mobile Side Nav */}
      <div
        className={`absolute h-[100dvh] overflow-hidden transition-all duration-500 bg-white z-[999] ${
          mobileNavOpen ? "w-[100%]" : "w-[0%]"
        }`}
      >
        <div className={`${
          mobileNavOpen ? "opacity-100" : "opacity-0"
        } transition-all duration-200 flex flex-col relative justify-center items-center gap-y-5 h-full`}>
          <button
            onClick={() => {
              setMobileNavOpen((p) => !p);
            }}
            className="absolute top-0 right-0 px-5 py-5 font-mono text-3xl"
          >
            x
          </button>
          <div
            className={`font-semibold ${
              pageRoute == "/" && "border-b-[5px] border-black rounded-sm"
            }`}
          >
            Home
          </div>
          <div className={`font-semibold`}>Resturants</div>
          <div className={`font-semibold`}>Room</div>
          <div className={`font-semibold`}>Spa</div>
          <div className={`font-semibold`}>Events</div>
          <div className={`font-semibold`}>About Us</div>
          <div className={`font-semibold`}>Contact</div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
