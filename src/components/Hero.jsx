import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { BsBriefcase } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { TbBuildingWarehouse } from "react-icons/tb";
import { RiGraduationCapLine } from "react-icons/ri";


const Hero = () => {
    const toggleJobsData = [
        {
            icon:<BsBriefcase />,
            title:"All Jobs"
        },
         {
            icon:<IoPeople />,
            title:"Silled"
        },
         {
            icon:<TbBuildingWarehouse />,
            title:"Unskilled"
        },
         {
            icon:<RiGraduationCapLine />,
            title:"Internships"
        }
    ]
    const [jobCount, setJobCount] = useState(2)
    const [toggleJobs, setToggleJobs] = useState(0)
    const handleToggle = (index)=>{
        setToggleJobs(toggleJobs === index ? null : index)
    }
  return (
    <>
    <section className='px-4'>
        <div className='lg:w-[671px] container mx-auto border px-2 py-4 my-5 text-white'>
        <h1 className='text-3xl font-semibold text-center'> Find your dream job</h1>
        <p>Discover verified job opportunities from trusted employers. No registration required - just browse, download, and apply!</p>
    </div>

    
        <form action="" className=' border border-white lg:w-[600px] container mx-auto rounded-md '>
            <div className='flex justify-between items-center text-white py-3 px-4'>
               <div className='flex items-center gap-4'>
                 <CiSearch size={26} />
                 <input className='lg:w-[268px]  outline-none ' type="search" placeholder='Search Jobs, Companies,location...'  />
               </div>
                <button className='px-3 py-2 rounded-md bg-[#0D47A1]'>Search</button>
            </div>
        </form>
   
    </section>

    {/* Handle toggle jobs section */}

    <section className='flex flex-wrap lg:flex-row text-white my-5 gap-10 justify-center'>
        {toggleJobsData.map((item,index)=>(
            <button onClick={()=>handleToggle(index)} className={`${toggleJobs == index ? "bg-[#0088FF] transition-all duration-700 ease-in-out" : ""} w-[200px] p-3 flex flex-col  items-center border border-white text-center rounded-xl`}>
                {item.icon}
                <span>{item.title}</span>
                <span>{jobCount}</span>
            </button>
        ))}
    </section>
    </>
  )
}

export default Hero