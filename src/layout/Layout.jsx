import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='lg:bg-[#1c232c] bg-white pb-5'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout