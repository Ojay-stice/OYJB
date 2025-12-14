import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router'
import { FaHeart } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import BuyCoffeeModal from './BuyCoffeeModal';


const Navbar = () => {
  const [showModal,setShowModal] = useState(false)

  const handleShowModal = ()=>{
    setShowModal(prev => !prev)
  }

  return (
    <nav className='px-4 lg:px-44 flex justify-between items-center py-4  lg:bg-[#0D47A1]'>
       
            <Link className='flex items-center' to={'/'}>
             <img src={logo} alt="" />
             <p className='text-3xl font-medium lg:text-white'>OYJB</p>
            </Link>
       

        <div className='lg:flex items-center gap-10 '>
            <div className='flex gap-3 items-center'>
                <button onClick={handleShowModal} className='flex rounded-md items-center gap-3 lg:p-3 lg:bg-[#F29B9B]'><FiCoffee className='text-2xl' /> <span className='hidden lg:inline'>Buy Coffee</span></button>
                <button onClick={handleShowModal} className='flex rounded-md items-center gap-3 lg:p-3 lg:bg-[#00C8B3]'><FaHeart className='text-2xl' /> <span className='hidden lg:inline'>Give Candy</span></button>
            </div>
            <div className='flex items-center gap-4'>
              <Link to={'/login'} className='lg:text-white hidden lg:inline'>Login</Link>
             <Link to={'/signup'} className='lg:text-white hidden lg:inline'>Sign Up</Link>
            </div>
        </div>

        {showModal && ( <BuyCoffeeModal handleShowModal={handleShowModal}/>)}
        
     </nav>
  )
}

export default Navbar