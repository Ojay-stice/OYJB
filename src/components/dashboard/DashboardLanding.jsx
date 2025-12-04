import React, { useState } from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsBriefcase } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { TbBuildingWarehouse } from "react-icons/tb";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

import logo from '../../assets/logo.svg'
import { Link } from 'react-router'
import { HeroBtn } from '../Hero';


const DashboardLanding = () => {

const [jobCount, setJobCount] = useState(3)

  const  sideMenuArray = [
        {
            icon:<BsBriefcase />,
            text:"Jobs",
        },
         {
            icon:<IoPeopleOutline />,
            text:"Categories",
        },
         {
            icon:<IoStatsChart />,
            text:"Analytics",
        }
    ]

    const jobsCategoryData = [
          {
            icon:<BsBriefcase />,
            text:"Total Jobs",
        },
         {
            icon:<IoPeopleOutline />,
            text:"Skilled Jobs",
        },
         {
            icon:<TbBuildingWarehouse />,
            text:"Unskilled Jobs",
        },
          {
            icon:<RiGraduationCapLine />,
            text:"Internships",
        },
       
    ]

    const quickActionData = [
        {
            icon: <FaPlus />,
            title:"Create Category",
        },
        {
            icon: <FaPlus />,
            title:"Create Sub-Category",
        },
        {
            icon: <BsBriefcase />,
            title:"Create Job",
        },
        {
            icon: <IoStatsChart />,
            title:"View Analytics",
        }
    ]

  return (
    <section className='flex'>
        {/* Side menu bar */}
        <div className='lg:w-[20%] flex flex-col justify-between lg:h-screen bg-[#1c232c] border border-r-[#CCCCCC]'>
          
           {/* Top half of the side menu */}
           <div>
             <Link className='flex border border-b-[#CCCCCC] py-3 justify-center items-center' to={'/'}>
             <img src={logo} alt="" />
             <p className='text-2xl font-medium text-white'>OYJB Admin</p>
            </Link>

            <div className='flex flex-col items-center my-2 '>
                <p className='flex items-center px-3 gap-2 w-[90%] text-white'><MdSpaceDashboard className='' /> <span>Dashboard</span></p>
            </div>
            
            {/* Side menu options div */}
            <div className='text-white flex flex-col items-center'>
               {sideMenuArray.map((item, index)=>(
                 <button key={index} className=' flex justify-between items-center px-3 py-2 my-2 w-[90%]'>
                    <div className='flex gap-2 items-center'>
                        <p>{item.icon}</p>
                        <p>{item.text}</p>
                    </div>
                    <p><MdKeyboardArrowDown /></p>
                </button>
               ))}
            </div>
           </div>

           {/* Settings, and logout div */}
           <div className=' border-amber-100'>
            <Link className='flex items-center gap-3  px-3 py-2 my-2 w-[90%]'> <IoSettingsOutline className='text-white' /> <span className='text-white'>Setting</span></Link>
            <button className='flex items-center text-red-600 gap-3  px-3 py-2 my-2 w-[90%]'> <MdLogout className='text-red-600' /> <span className='text-white'>Logout</span></button>
           </div>

        </div>

        {/* Dashboard details */}
        <div className='lg:w-[80%] lg:h-screen bg-[#1c232c]'>

            {/* Navigation bar */}
            <div className='bg-[#333333] border border-b-black py-4 px-4 flex justify-between'>
                
                    <p className='text-white'>Admin dashboard</p>
                

                <div className='flex gap-3'>
                   <div className=' bg-[#8E8E93] rounded-full size-8 flex items-center justify-center'>
                     <IoIosNotificationsOutline />
                   </div>
                    <p className='bg-[#0088FF] rounded-full  size-8 flex items-center justify-center'>A</p>
                </div>

            </div>

            {/* Dashboard Categories */}

            <div className='flex gap-3 px-3 pt-5'>
                {jobsCategoryData.map((item, index)=>(
                    <HeroBtn key={index}
                    icon={item.icon}
                    index={index}
                    title={item.text}
                    jobCount={jobCount}
                    subClass={'text-left'}
                    className={'flex items-center flex-row-reverse justify-between text-sm pr-10 pl-5 py-2 text-white w-[286px] bg-[#183255]'}

                    />
                ))}
            </div>

            {/* Quick Actions Div */}
            <div className=' px-3 py-5'>
                <h4 className='text-white py-2'>Quick Actions</h4>
                <div className='flex items-center gap-3 text-white'>
                    {quickActionData.map((item, index)=>(
                        <Link className='flex items-center gap-3 w-[286px] bg-[#183255] pr-10 pl-5 py-2'>
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default DashboardLanding