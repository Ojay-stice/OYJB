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
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";



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
    //  const quickActionData = [
    //     {
    //         icon: <FaPlus />,
    //         title:"Create Category",
    //     },
    //     {
    //         icon: <FaPlus />,
    //         title:"Create Sub-Category",
    //     },
    //     {
    //         icon: <BsBriefcase />,
    //         title:"Create Job",
    //     },
    //     {
    //         icon: <IoStatsChart />,
    //         title:"View Analytics",
    //     }
    // ]
    const [toggle, setToggle] = useState(false)
    const dashboardNavToggle = ()=>{
        setToggle(prev => !prev)
    }
  return (
    <section className='lg:flex'>
        {/* Side menu bar */}
        <div className='hidden lg:w-[20%] lg:flex flex-col justify-between lg:h-screen lg:bg-[#1c232c] border border-r-[#CCCCCC]'>
          
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
        <div className='lg:w-[80%] lg:h-screen lg:bg-[#1c232c]'>

            {/* Navigation bar */}
            <div className='lg:bg-[#333333] border border-b-black py-4 px-4 flex justify-between'>
                    <div className='flex items-center gap-5 '>
                        <FaBars onClick={dashboardNavToggle} className='lg:hidden'/>
                         <p className='lg:text-white'>Admin dashboard</p>
                    </div>
                

                <div className='flex gap-3'>
                   <div className=' bg-[#8E8E93] rounded-full size-8 flex items-center justify-center'>
                     <IoIosNotificationsOutline />
                   </div>
                    <p className='bg-[#0088FF] rounded-full  size-8 flex items-center justify-center'>A</p>
                </div>

            </div>
            {/* Mobile navigation menu */}
               {toggle && (
                        <div className='w-[80%] absolute top-0 left-0 flex flex-col justify-between h-screen bg-[#344054] border border-r-[#CCCCCC]'>
                    
                    {/* Top half of the side menu */}
                    <div>
                       <div className='flex justify-between items-center px-5 border border-b-[#CCCCCC] py-3 '>
                             <Link className='flex  items-center' to={'/'}>
                            <img src={logo} alt="" />
                            <p className='text-2xl font-medium text-white'>OYJB Admin</p>
                            </Link>
                            <FaXmark onClick={dashboardNavToggle} className='text-2xl text-white' />
                       </div>

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
                    <div className='addborder border-amber-100'>
                        <Link className='flex items-center gap-3  px-3 py-2 my-2 w-[90%]'> <IoSettingsOutline className='text-white' /> <span className='text-white'>Setting</span></Link>
                        <button className='flex items-center text-red-600 gap-3  px-3 py-2 my-2 w-[90%]'> <MdLogout className='text-red-600' /> <span className='text-red-600'>Logout</span></button>
                    </div>

                    </div>
               )}

            {/* Dashboard Categories */}

            <div className='flex flex-col lg:flex-row gap-3 px-3 pt-5'>
                {jobsCategoryData.map((item, index)=>(
                    <HeroBtn key={index}
                    icon={item.icon}
                    index={index}
                    title={item.text}
                    jobCount={jobCount}
                    subClass={'text-left'}
                    className={'flex items-center flex-row-reverse justify-between text-sm pr-10 pl-5 py-2 text-white w-full lg:w-[286px] bg-[#183255]'}

                    />
                ))}
            </div>

            {/* Quick Actions Div */}
            <div className=' px-3 py-5'>
                <h4 className='lg:text-white py-2'>Quick Actions</h4>
                <div className='flex flex-col lg:flex-row items-center gap-3 text-white'>
                    {quickActionData.map((item, index)=>(
                        <Link key={index} className='flex items-center gap-3 w-full lg:w-[286px] bg-[#183255] pr-10 pl-5 py-2'>
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