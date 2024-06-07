import Image from 'next/image'
import React from 'react'
import { BedHeaderImageBookNowIcon, ImageHeaderArrowIcon } from '../Icons'

const ImageHeader = () => {
  return (
    <div className='relative'>
      <Image className='hidden lg:inline h-[100dvh]' src={'/desktop-header.png'} height={3000} width={3000}  alt="" />
      <Image className='lg:hidden h-[100dvh]' src={'/mobile-header.png'} height={1000} width={1000} alt=""  />
      <div className='absolute top-0 left-0 w-full h-[100dvh] flex gap-y-3 lg:gap-y-10 flex-col justify-end items-center' >
        <div className='text-center'>
            <p className='text-white font-bold text-[30px] md:text-[51px] lg:text-[68px]'>Double Deluxe Room</p>
            <p className='text-white font-light text-[16px] md:text-[20px] lg:text-[25px]'>A blend of elegance and nature</p>
        </div>
        <div className='my-5'>
            <button className='rounded-lg bg-white px-8 py-4 font-medium flex items-center justify-between gap-x-5 text-lg'> <BedHeaderImageBookNowIcon/> Book Room</button>
        </div>
        <div className='py-20'>
            <ImageHeaderArrowIcon/>
        </div>
      </div>
    </div>
  )
}

export default ImageHeader
