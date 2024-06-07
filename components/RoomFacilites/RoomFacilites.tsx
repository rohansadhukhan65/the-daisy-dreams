import Image from 'next/image'
import React from 'react'

const RoomFacilites = () => {
  return (
    <div className='my-5'>
      <Image src={'/Room-Facilities-Desktop.png'} height={3000} width={3000} className='w-full hidden md:inline' alt=''/>
      <Image src={'/Room-Facilities-Mobile.png'} height={1000} width={1000} className='w-full inline md:hidden' alt=''/>
    </div>
  )
}

export default RoomFacilites
