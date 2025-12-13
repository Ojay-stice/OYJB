import React from 'react'
import { BsBriefcase } from "react-icons/bs";



const NoJobFound = () => {
  return (
    <div className='lg:w-[696px] flex flex-col gap-3 items-center justify-center'>
        <BsBriefcase />
        <p className='text-2xl'>No jobs found</p>
        <p className='text-xl'>Try adjusting your search criteria or check back later for new opportunities</p>

    </div>
  )
}

export default NoJobFound