import React from 'react'
import { useState } from 'react'

const Signup = () => {
     const [selectedRole, setSelectedRole] = useState("")
      const [loginDetails, setLoginDetails] = useState({
        email:"",
        password:"",
        role:""
      })
    
      
      const handleChange = (e)=>{
        setLoginDetails({...loginDetails, [e.target.name]:e.target.value})
        console.log(e.target.name, e.target.value)
      }
      
      const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(loginDetails)


      }
      
  return (
    <div>
         <form onSubmit={handleSubmit} className='mt-6 w-[400px] mx-auto border border-white'>
                      <p className='text-left py-1 pl-3'>Register</p>
                    
                      <div className='px-3 text-left mt-2'>
                        <label htmlFor="">Role</label>
                        <select onChange={handleChange} type="text" name='role' className='w-full py-3 rounded-xl outline-none px-3 my-2 border border-gray-500' placeholder='Select Role'>
                            <option className='text-gray-400' value=""></option>
                            <option value="Admin">Admin</option>
                            <option value="Super Admin"> Super Admin</option>
                        </select>
                      </div>

                      <div className='px-3 text-left mt-2'>
                        <label htmlFor="">Email</label>
                        <input onChange={handleChange} type="text" name='email' className='w-full py-3 rounded-xl outline-none px-3 my-2 border border-gray-500' placeholder='Enter your Email' />
                      </div>
                      
                       <div className='px-3 text-left my-2'>
                        <label htmlFor="">Password</label>
                        <input onChange={handleChange} type="text" name='password' className='w-full py-3 rounded-xl outline-none px-3 my-2 border border-gray-500' placeholder='Enter your password' />
                      </div>
        
                      <div className=' mx-3'>
                         <button className='w-full flex items-center justify-center text-black text-center py-3 bg-[#0088FF] cursor-pointer'>Sign In</button>
                      </div>
                    </form>
    </div>
  )
}

export default Signup