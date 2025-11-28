import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='bg-[#1c232c] py-5'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout