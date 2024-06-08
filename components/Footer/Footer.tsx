import Image from "next/image";
import React from "react";
import { EmailIcon, TelePhoneIcon } from "../Icons";

const Footer = () => {
  return (
    <div className="relative">
      <Image
        src={"/footerImg.png"}
        className="hidden lg:block h-[556px]"
        height={3000}
        width={3000}
        alt=""
      />
    
      {/* desktop */}
      <div className="absolute top-0 left-0  w-full hidden lg:block ">
        <div className="flex flex-col justify-center">
          <div className="flex justify-evenly items-center my-10 py-10">
            <div className="text-white 1/3 p-4 flex flex-col justify-center items-center gap-y-5">
              <p className="text-2xl font-semibold">Our Services</p>
              <span className="text-[18px]">Rooms</span>
              <span className="text-[18px]">Entertaintment</span>
              <span className="text-[18px]">Room Service</span>
            </div>
            <div className="text-white 1/3 p-4 flex flex-col justify-center items-center">
              <div className="flex flex-col gap-y-3 justify-center items-center">
                <Image src={"/icon.png"} height={50} width={50} alt="" />
                <p className="font-semibold text-[23px] text-white text-center">
                  The Daisy Dreams
                </p>
              </div>
              <p className="max-w-[494px]">
                Escape to a world of tranquility and charm at The Daisy Dreams.
                Our boutique hotel offers a haven for relaxation and
                rejuvenation, where every detail is designed to whisk you away
                on a delightful escape.
              </p>
            </div>
            <div className="text-white 1/3 p-4 flex flex-col justify-center items-center gap-y-5">
              <p className="text-2xl font-semibold">Support</p>
              <span className="text-[18px]">Contacts</span>
              <span className="text-[18px]">Privacy Policy</span>
              <span className="text-[18px]">Help</span>
            </div>
          </div>
          <div className="w-full text-white flex flex-col justify-center items-center">
            <p className="text-white mb-5 text-2xl font-semibold">Contact Us</p>
            <p className="font-normal flex gap-x-2">
              <TelePhoneIcon /> +7003459639
            </p>
            <p className="font-normal flex gap-x-2">
              <EmailIcon />
              rohan.sadhukhan.56@gmail.com
            </p>
          </div>
          <div className="w-[80%] border-t border-white mt-5 mx-auto text-white text-center py-5">
            <p>CopyRight@RohanSadhukhan 2024</p>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className=" w-full block lg:hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage:'url("/footer-mobile.png")'}}>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-evenly items-center my-10 py-10">
          <div className="text-white 1/3 p-4 flex flex-col justify-center items-center">
              <div className="flex flex-col gap-y-3 justify-center items-center">
                <Image src={"/icon.png"} height={50} width={50} alt="" />
                <p className="font-semibold text-[23px] text-white text-center">
                  The Daisy Dreams
                </p>
              </div>
              <p className="max-w-[494px] text-center">
                Escape to a world of tranquility and charm at The Daisy Dreams.
                Our boutique hotel offers a haven for relaxation and
                rejuvenation, where every detail is designed to whisk you away
                on a delightful escape.
              </p>
            </div>
            <div className="text-white 1/3 p-4 flex flex-col justify-center items-center gap-y-5">
              <p className="text-2xl font-semibold">Our Services</p>
              <span className="text-[18px]">Rooms</span>
              <span className="text-[18px]">Entertaintment</span>
              <span className="text-[18px]">Room Service</span>
            </div>
            
            <div className="text-white 1/3 p-4 flex flex-col justify-center items-center gap-y-5">
              <p className="text-2xl font-semibold">Support</p>
              <span className="text-[18px]">Contacts</span>
              <span className="text-[18px]">Privacy Policy</span>
              <span className="text-[18px]">Help</span>
            </div>
          </div>
          <div className="w-full text-white flex flex-col justify-center items-center">
            <p className="text-white mb-5 text-2xl font-semibold">Contact Us</p>
            <p className="font-normal flex gap-x-2">
              <TelePhoneIcon /> +7003459639
            </p>
            <p className="font-normal flex gap-x-2">
              <EmailIcon />
              rohan.sadhukhan.56@gmail.com
            </p>
          </div>
          <div className="w-[80%] border-t border-white mt-5 mx-auto text-white text-center py-5">
            <p>CopyRight@RohanSadhukhan 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
