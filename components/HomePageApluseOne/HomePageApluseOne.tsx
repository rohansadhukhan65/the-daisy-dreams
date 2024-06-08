import Image from 'next/image'
import React from 'react'

const HomePageApluseOne = () => {
  return (
    <div className='mt-[54px] flex flex-col-reverse lg:flex-row mx-[48px] justify-around items-center'>
      <div className='1/2 text-center md:text-left'>
        <p className='max-w-[542px] my-5 text-center md:text-left text-[14px] md:text-[20px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className='max-w-[542px] my-10 text-center md:text-left text-[14px] md:text-[20px]'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button className='my-5 px-10 py-5 bg-black text-white rounded-lg text-[14px] md:text-[20px]'>Explore our rooms</button>
      </div>
      <div className='1/2 grid grid-cols-2 '>
        <div className='p-1 md:p-5'><Image src={'/home-a-pluse-one.png'} height={300} width={300} alt='' /></div>
        <div className='p-1 md:p-5'><Image src={'/gome-a-pluse-two.png'} height={300} width={300} alt='' /></div>
        <div className='p-1 md:p-5'><Image src={'/home-a-pluse-three.png'} height={300} width={300} alt='' /></div>
        <div className='p-1 md:p-5'><Image src={'/home-a-pluse-four.png'} height={300} width={300} alt='' /></div>
      </div>
    </div>
  )
}

export default HomePageApluseOne
