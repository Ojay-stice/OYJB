import React, { useState } from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { BsShield } from "react-icons/bs";
import { BsPersonLock } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { IoIosLock } from "react-icons/io";





const AdminLoginComp = () => {
  const roles = [{role:'Admin', icon:<BsPersonLock />}, {role:"Super Admin",icon:<GrUserAdmin />}]
  const [openIndex, setOpenIndex] = useState(null)
  const [selectedRole, setSelectedRole] = useState("")
  const [loginDetails, setLoginDetails] = useState({
    email:"",
    password:"",
    role:selectedRole
  })

  
  const handleChange = (e)=>{
    setLoginDetails({...loginDetails, [e.target.name]:e.target.value})
    console.log(e.target.name, e.target.value)
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(loginDetails)
  }
  
  const handleRoleChange = (item, index)=>{
    setSelectedRole(item.role)
    setLoginDetails({...loginDetails, role:item.role})
    setOpenIndex(openIndex === index ? null : index)
    console.log(item.role)
  
  }
  return (
    <div className='w-full h-screen '>
      <div className='flex gap-2 items-center text-white px-5 py-2'>
        <IoArrowBackCircleOutline className='text-3xl'/>
        <p className=''>Back to Job Board</p>
      </div>

      <div className='lg:w-[436px] py-3 bg-[#0D47A1] container mx-auto'>

        <div className=' py-3 text-white text-center'>
            <div className='lg:w-[332px] mx-auto'>
                <div className='bg-[#0088FF]  rounded-xl flex justify-center items-center w-[67px] h-[74px] mx-auto'>
                <BsShield className='text-[60px] text-black p-3'/>
                </div>
                <h5 className='text-2xl text-center'>Admin Login</h5>
                <p>Sign in to manage the job board platform</p>
            </div>
            {/* form field */}
            <form onSubmit={handleSubmit} className='mt-6'>
              <p className='text-left py-1 pl-3'>Login as</p>
              <div className='flex gap-3 px-3 justify-center'>
                {roles.map((item,index)=>(
                  <button onClick={()=>handleRoleChange(item, index)} key={index} className={`${openIndex === index ? "bg-black text-white w-[200px] rounded-xl text-center py-3": ""} w-[200px] rounded-xl text-center cursor-pointer bg-[#0088FF] text-black py-3`}>
                    <GrUserAdmin className='mx-auto' />
                    <p className=''>{item.role}</p>
                  </button>
                ))}
              </div>
              <div className='px-3 text-left mt-2'>
                <label htmlFor="">Email</label>
                <input onChange={handleChange} type="text" name='email' className='w-full py-3 rounded-xl outline-none px-3 my-2 border border-white' placeholder='Enter your Email' />
              </div>
               <div className='px-3 text-left my-2'>
                <label htmlFor="">Password</label>
                <input onChange={handleChange} type="text" name='password' className='w-full py-3 rounded-xl outline-none px-3 my-2 border border-white' placeholder='Enter your password' />
              </div>

              <div className=' mx-3'>
                
                <button className='w-full flex items-center justify-center text-black text-center py-3 bg-[#0088FF] cursor-pointer'><IoIosLock />Sign In</button>
              </div>
            </form>
        </div>

      </div>
    </div>
  )
}

export default AdminLoginComp