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
        console.log(index)
    }
  return (
    <>
    <section className='px-4'>
        <div className='lg:w-[671px] container mx-auto lg:border px-2 py-4 my-5 lg:text-white'>
        <h1 className='text-3xl font-semibold text-center'> Find your dream job</h1>
        <p>Discover verified job opportunities from trusted employers. No registration required - just browse, download, and apply!</p>
    </div>

    
        <form action="" className=' border border-[#D0D5DD] lg:border-white lg:w-[600px] container mx-auto rounded-md '>
            <div className='flex justify-between items-center lg:text-white py-3 px-4'>
               <div className='flex items-center gap-4'>
                 <CiSearch size={26} />
                 <input className='lg:w-[268px]  outline-none ' type="search" placeholder='Search Jobs, Companies,location...'  />
               </div>
                <button className='px-3 py-2 rounded-md bg-[#0D47A1]'>Search</button>
            </div>
        </form>
   
    </section>

    {/* Handle toggle jobs section */}

    <section className='flex flex-wrap flex-row lg:text-white mt-10 mb-5 gap-4 lg:gap-10 justify-center'>
        {toggleJobsData.map((item,index)=>(
           <HeroBtn key={index}
           handleToggle={()=>handleToggle(index)}
           toggleJobs={toggleJobs}
           icon={item.icon}
           title={item.title}
           jobCount={jobCount}
           index={index}
           className={'lg:w-[200px] w-[83.5px] p-3 flex flex-col items-center border border-[#D0D5DD] lg:border-white text-center rounded-xl'}
            />
        ))}
    </section>
    </>
  )
}

export default Hero



export function HeroBtn({index, handleToggle, toggleJobs, icon, title, jobCount, className, subClass}) {
  return (
     <button key={index} onClick={handleToggle} className={`${toggleJobs == index ? "bg-[#0088FF] transition-all duration-700 ease-in-out" : ""}  ${className}`}>
                {icon}
                <div className={`${subClass}`}>
                    <p>{title}</p>
                    <p>{jobCount}</p>
                </div>
            </button>
  )
}
