import category from "@/data/category";
import rooms from "@/data/rooms";
import Image from "next/image";
import { dot } from "node:test/reporters";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { CoffieIcon, LeftArrowIcon, RightArrowIcon } from "../Icons";

const ChooseTheBest = () => {
  const [currentCategory, changeCategory] = useState(0);
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  let sliderRef: any = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <>
        <button
          className="absolute bottom-[50%] z-50"
          onClick={() => {
            sliderRef.current.slickPrev();
          }}
        >
          <LeftArrowIcon/>
        </button>
      </>
    ),
    nextArrow: (
      <>
        <button
          className="absolute right-0 bottom-[50%] z-50"
          onClick={() => {
            sliderRef.current.slickNext();
          }}
        >
          <RightArrowIcon/>
        </button>
      </>
    ),
  };

  useLayoutEffect(() => {
    category[currentCategory] !== "All"
      ? setFilteredRooms(
          rooms.filter((room) => room.category === category[currentCategory])
        )
      : setFilteredRooms(rooms);
  }, [currentCategory]);


  return (
    <div className="my-[54px]">
      <p className="text-[40px] font-bold text-center">Choose The Best</p>
      <div className="flex gap-x-5 justify-center my-10 text-xl">
        {category.map((i, k) => (
          <span
            onClick={() => {
              changeCategory(k);
            }}
            className={`${
              category[currentCategory] === i
                ? "border-b border-black font-bold"
                : ""
            } cursor-pointer transition-all duration-100`}
            key={i + `${k}`}
          >
            {i}
          </span>
        ))}
      </div>
      <div className="px-10 mx-40">
        <Slider ref={sliderRef} {...settings}>
          {filteredRooms.map((r, k) => (
            <div key={`${k}-${r.id}-${r.img}`}>
              <div className="p-5 mx-auto w-[20rem] shadow-lg my-10 rounded-lg border">
                <Image src={r.img} height={300} width={300} alt="" className="mb-5" />
                <p className="font-bold">{r.name}</p>
                <p className="my-3">{r.description.length > 50 ? r.description.substring(0,50)+'...':r.description}</p>
                <div className="flex gap-x-5 my-5">
                    <span><CoffieIcon/></span>
                    <span><CoffieIcon/></span>
                    <span><CoffieIcon/></span>
                </div>
                <p className="">
                    <span className="text-[14px]">Starting From : </span>
                    <span className="font-semibold text-xl"> ₹{r.price} / night</span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ChooseTheBest;
