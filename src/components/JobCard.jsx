import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";
import { useState } from 'react';
import {Link} from 'react-router'



function JobCard({job}) {
    const [showDesc, setShowDesc] = useState(false);

    let description = job.description;
    if (!showDesc) {
        description = description.substring(0, 100) 
    }
  return (
    
     <div key={job.id} className='p-4 flex flex-col gap-3 bg-[#192E49] border'>
        <div className='flex justify-between px-4'>
            <div className='text-white'>
                <p className='text-[20px] font-[500px]'>{job.title}</p>
               <h2 className='text-[14px] font-[400px]'>{job.company_name}</h2>
            </div>
        
        
            <div className='flex gap-2 text-white'>
              <p className=' w-[46px] rounded-[6px] h-[25px] p-2 text-[10px] items-center bg-[#135924D6]'>{job.category}</p>
              <p>Expires: 12/31/2025</p>
            </div>
        
        </div>
         
         <div className='flex gap-4'>
            <div className='flex gap-2 items-center text-white text-[18px]'>
                <CiLocationOn />
                <p>{job.location}</p>
            </div>
            
            <div className='flex gap-2 items-center text-white text-[18px]'>
                <IoMdTime />
                <p>{job.employment_type}</p>
            </div>
            
            <div className='flex gap-2 items-center text-white text-[18px]'>
                <IoMdContacts />
                <p>{job.category}</p>
            </div>
         </div>
        
        <div>
            <p className='text-white'>{description}</p>
            {/* <button onClick={()=> setShowDesc(prev=>!prev)} className='text-white cursor-pointer'>{showDesc ? "Less" : "More"}</button> */}
            
        </div>
        <div className='flex items-center justify-between'>
        <p className='text-white'>{job.salary}</p>
        <Link to={`/jobs/${job.id}`} className='px-7 py-2 bg-blue-600 cursor-pointer rounded-[6px]' >Download Details</Link>
        </div>
    </div> 
    
  )
}

export default JobCard