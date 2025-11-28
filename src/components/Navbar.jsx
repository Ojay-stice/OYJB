import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router'
import { FaHeart } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";


const Navbar = () => {
  return (
    <nav className='px-4 lg:px-44 flex justify-between items-center py-4  bg-[#0D47A1]'>
        <div className='flex items-center'>
            <img src={logo} alt="" />
            <p className='text-3xl font-medium text-red-600'>OYJB</p>
        </div>

        <div className='lg:flex items-center gap-10 hidden '>
            <div className='flex gap-3 items-center'>
                <button className='flex rounded-md items-center gap-3 p-3 bg-[#F29B9B]'><FiCoffee /> <span>Buy Coffee</span></button>
                <button className='flex rounded-md items-center gap-3 p-3 bg-[#00C8B3]'><FaHeart /> <span>Give Candy</span></button>
            </div>
            <Link className='text-white'>Admin Login</Link>
        </div>
        
     </nav>
  )
}

export default Navbar