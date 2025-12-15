import React from 'react'
import { Link } from 'react-router'

function AdminForm() {
  return (
    <>
     <Link>
      <section className=' flex justify-center bg-[#f7f7f7] '>
      <div className='w-[600px] bg-gray-400 p-5 my-6'>
      <h2 className='text-center text-2xl text-blue-900 font-medium'>Admin form</h2>
      <form   action="" method="post"  className='flex flex-col'>

          <label className='pt-4 font-semibold py-3' htmlFor="title">Title</label>
          <input  className='border outline-none py-3 px-2 rounded ' name='title'  type="text"  placeholder='title'  />

          <label className='pt-4 font-semibold' htmlFor="category">Category</label>
          <select  className='border outline-none py-3 px-2 rounded' name="category" id="category">
            <option value="Skilled">Skilled</option>
            <option value="Unskilled">Unskilled</option>
            <option value="Internship">Internship</option>
          </select>


          <label className='pt-4 font-semibold' htmlFor="employmentType">Employment Type</label>
          <select  className='border outline-none py-3 px-2 rounded' name="employmentType" id="employmentType">
            <option value="fullTime">Full time</option>
            <option value="partTime">Part time</option>
            <option value="remote">Remote</option>
            <option value="Internship">Internship</option>
          </select>
          

          <label className='pt-4 font-semibold' htmlFor="salary">Salary</label>
          <input   className='border outline-none py-3 px-2 rounded my-2' id='salary' type="text" name='salary'  placeholder='salary' /> 
          
          <label className='pt-4 font-semibold' htmlFor="location">Location</label>
          <input   className='border outline-none py-3 px-2 rounded my-2' id='location' type="text" name='location'  placeholder='location' /> 
          
          
          <label className='pt-4 font-semibold' htmlFor="companyName">Company Name</label>
          <input   className='border outline-none py-3 px-2 rounded my-2' id='companyName' type="text" name='companyName'  placeholder='companyName' /> 
          
          
          <label className='pt-4 font-semibold' htmlFor="companyAbout">Company About</label>
          <input   className='border outline-none py-3 px-2 rounded my-2' id='companyAbout' type="text" name='companyAbout'  placeholder='companyAbout' /> 
          
          
          <label className='pt-4 font-semibold' htmlFor="description">Description</label>
          <input   className='border outline-none py-3 px-2 rounded my-2' id='description' type="text" name='description'  placeholder='description' /> 
          
          
          <label className='pt-4 font-semibold' htmlFor="offers">Offers</label>
          <input   className='border outline-none py-3 px-2 rounded my-2' id='offers' type="text" name='offers'  placeholder='offers' /> 
          
          
          <label className='pt-4 font-semibold' htmlFor="whatTheyDo">What They Do</label>
          <input   className='border outline-none py-3 px-2 rounded my-2' id='whatTheyDo' type="text" name='whatTheyDo'  placeholder='whatTheyDo' /> 

          <button  className='bg-blue-900 w-full py-2 rounded-2xl mt-4 text-white font-medium cursor-pointer' type='submit'> Add Job</button>
      </form>
      </div>
    </section>
     </Link>
    </>
  )
}

export default AdminForm