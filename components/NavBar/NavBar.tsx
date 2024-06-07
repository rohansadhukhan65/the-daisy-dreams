import Image from "next/image";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [navbarColor, setNavbarColor] = useState("");
  const handleScroll = () => {
    const screenHeight = window.innerHeight;
    if (window.scrollY > screenHeight) {
      setNavbarColor("bg-black"); // Change to your desired color
    } else {
      setNavbarColor("transparent"); // Change to your default color
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
    <div
      className={`w-full ${navbarColor} transition-all duration-500 fixed z-50 flex items-center gap-x-10 justify-around py-[23px]`}
    >
      <div className="flex 1/3 gap-x-10">
        <div className="font-medium text-white text-[20px] cursor-pointer">
          Resturants
        </div>
        <div className="font-medium text-white text-[20px] cursor-pointer">
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
        <p className="font-semibold text-[23px] text-white">The Daisy Dreams</p>
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
  );
};

export default NavBar;
