import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { BsBriefcase } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { TbBuildingWarehouse } from "react-icons/tb";
import { RiGraduationCapLine } from "react-icons/ri";
import NoJobFound from './NoJobFound';
import Jobcard from './Jobcard';



const Hero = () => {

   const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    location: "New York, NY",
    type: "Skilled",
    salary: 95000,
    experienceLevel: "Mid",
    remote: true,
    postedAt: "2025-01-05"
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "CodeForge",
    location: "San Francisco, CA",
    type: "Skilled",
    salary: 115000,
    experienceLevel: "Senior",
    remote: false,
    postedAt: "2025-01-03"
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "PixelWorks",
    location: "Remote",
    type: "Skilled",
    salary: 70000,
    experienceLevel: "Mid",
    remote: true,
    postedAt: "2025-01-01"
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "InsightIQ",
    location: "Austin, TX",
    type: "Skilled",
    salary: 85000,
    experienceLevel: "Junior",
    remote: true,
    postedAt: "2024-12-28"
  },

  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudCore",
    location: "Seattle, WA",
    type: "Unskilled",
    salary: 125000,
    experienceLevel: "Senior",
    remote: false,
    postedAt: "2025-01-02"
  },
  {
    id: 6,
    title: "Product Manager",
    company: "Innovent",
    location: "Boston, MA",
    type: "Unskilled",
    salary: 105000,
    experienceLevel: "Mid",
    remote: true,
    postedAt: "2024-12-30"
  },
  {
    id: 7,
    title: "Mobile App Developer",
    company: "AppNest",
    location: "Denver, CO",
    type: "Unskilled",
    salary: 98000,
    experienceLevel: "Mid",
    remote: false,
    postedAt: "2025-01-04"
  },

  {
    id: 8,
    title: "QA Engineer",
    company: "BugFree Labs",
    location: "Remote",
    type: "Internship",
    salary: 60000,
    experienceLevel: "Junior",
    remote: true,
    postedAt: "2024-12-27"
  },
  {
    id: 9,
    title: "Machine Learning Engineer",
    company: "NeuroTech",
    location: "San Jose, CA",
    type: "Internship",
    salary: 145000,
    experienceLevel: "Senior",
    remote: false,
    postedAt: "2025-01-06"
  },
  {
    id: 10,
    title: "Technical Writer",
    company: "DocuFlow",
    location: "Remote",
    type: "Internship",
    salary: 65000,
    experienceLevel: "Mid",
    remote: true,
    postedAt: "2024-12-29"
  }
];
    
    const toggleJobsData = [
        {
            icon:<BsBriefcase />,
            title:"All Jobs"
        },
         {
            icon:<IoPeople />,
            title:"Skilled"
        },
         {
            icon:<TbBuildingWarehouse />,
            title:"Unskilled"
        },
         {
            icon:<RiGraduationCapLine />,
            title:"Internship"
        }
    ]

    const jobsCount = {
        "All Jobs" : jobs.length,
        Skilled: jobs.filter(item=>item.type === "Skilled").length,
        Unskilled:jobs.filter(item=>item.type === "Unskilled").length,
        Internship:jobs.filter(item=>item.type === "Internship").length
    }

    
    // const [jobCount, setJobCount] = useState(0)
    const [toggleJobs, setToggleJobs] = useState(0)
    const handleToggle = (index)=>{
        setToggleJobs(toggleJobs === index ? null : index)
        console.log(index)
    }
    const selectedCategory = toggleJobsData[toggleJobs]?.title
   
    const filteredJobs = selectedCategory === "All Jobs" ? jobs : jobs.filter(job => job.type === selectedCategory)
   
    //  const jobCount = jobs.filter(job => job.type === selectedCategory).length
    //  console.log(jobCount)

  return (
    <>
    <section className='px-4'>
        <div className='lg:w-[671px] container mx-auto lg:border px-2 py-4 my-5 '>
        <h1 className='text-3xl font-semibold text-center'> Find your dream job</h1>
        <p>Discover verified job opportunities from trusted employers. No registration required - just browse, download, and apply!</p>
    </div>

    
        <form action="" className=' border border-[#D0D5DD] lg:border-[#1c232c] lg:w-[600px] container mx-auto rounded-md '>
            <div className='flex justify-between items-center  py-3 px-4'>
               <div className='flex items-center gap-4'>
                 <CiSearch size={26} />
                 <input className='lg:w-[268px]  outline-none ' type="search" placeholder='Search Jobs, Companies,location...'  />
               </div>
                <button className='px-3 py-2 rounded-md bg-[#0D47A1]'>Search</button>
            </div>
        </form>
   
    </section>

    {/* Handle toggle jobs section */}

    <section className='flex flex-wrap flex-row lg:text-[#1c232c] mt-10 mb-5 gap-4 lg:gap-10 justify-center'>
        {toggleJobsData.map((item,index)=>(
           <HeroBtn key={index}
           handleToggle={()=>handleToggle(index)}
           toggleJobs={toggleJobs}
           icon={item.icon}
           title={item.title}
           jobCount={jobsCount[item.title]}
           index={index}
           className={'lg:w-[200px] w-[83.5px] p-3 flex flex-col items-center border border-[#D0D5DD] lg:border-[#1c232c] text-center rounded-xl'}
            />
     ))}
</section> 

 <div className='px-4'>
        {
            filteredJobs.map((job, index)=>(
                <Jobcard key={index} job={job} />
            ))
        }
       </div>
    </>
  )
}

export default Hero



export function HeroBtn({index, handleToggle, toggleJobs, icon, title, jobCount, className, subClass}) {
  return (
     <div>

        <button key={index}  onClick={handleToggle} className={`${toggleJobs == index ? "bg-[#0088FF] transition-all duration-700 ease-in-out" : ""}  ${className}`}>
                {icon}
                <div className={`${subClass}`}>
                    <p>{title}</p>
                    <p>{jobCount}</p>
                </div>
            </button>
           
     </div>
  )
}
