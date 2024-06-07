import Image from 'next/image'
import React from 'react'

const ImageHeader = () => {
  return (
    <div className='relative'>
      <Image className='hidden lg:inline' src={'/desktop-header.png'} height={3000} width={3000} alt="" />
      <Image className='lg:hidden' src={'/mobile-header.png'} height={1000} width={1000} alt="" />
    </div>
  )
}

export default ImageHeader
