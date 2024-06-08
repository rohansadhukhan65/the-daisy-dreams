import React, { useState } from "react";

const BookRooms = () => {
    const [adults , setAdults] = useState(0)
    const [children , setChildren] = useState(0)
  return (
    <div className="w-full my-32 hidden lg:block">
      <div className="flex mx-auto justify-evenly px-20">
        <div className="bg-black p-5 px-14 mx-5 rounded-xl">
          <span className="text-gray-400">CHECK-IN</span>
          <div>
            <p className="text-white font-bold text-2xl my-3">Arrival date</p>
            <input
              type="date"
              className="bg-gray-500 outline-none rounded-md text-white px-5 py-3"
            />
          </div>
        </div>
        <div className="bg-black p-5 px-14 mx-5 rounded-xl">
          <span className="text-gray-400">CHECK-OUT</span>
          <div>
            <p className="text-white font-bold text-2xl my-3">Depart date</p>
            <input
              type="date"
              className="bg-gray-500 outline-none rounded-md text-white px-5 py-3"
            />
          </div>
        </div>
        <div className="bg-black p-5 px-10 mx-5 rounded-xl">
            <span className="text-white">ADULTS</span>
            <div className="text-white flex gap-x-5 h-[80%]">
                <button className="text-3xl" onClick={()=>{ setAdults(p => p >= 0 ? p +1 : 1) }}>+</button>
                <span className="text-3xl flex items-center">{adults}</span>
                <button className="text-3xl" onClick={()=>{ setAdults(p => p > 0 ? p - 1 : 0) }} >-</button>
            </div>
        </div>
        <div className="bg-black p-5 px-10 mx-5 rounded-xl">
            <span className="text-white">CHILDREN</span>
            <div className="text-white flex gap-x-5 h-[80%]">
                <button className="text-3xl" onClick={()=>{ setChildren(p => p >= 0 ? p +1 : 1) }} >+</button>
                <span className="text-3xl flex items-center">{children}</span>
                <button className="text-3xl" onClick={()=>{ setChildren(p => p > 0 ? p - 1 : 0) }} >-</button>
            </div>
        </div>
        <div className="flex items-center">
          <button className="border border-black rounded-md px-10 py-4 text-xl transition-all duration-200 hover:bg-black hover:text-white" type="button">
            Book Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookRooms;
