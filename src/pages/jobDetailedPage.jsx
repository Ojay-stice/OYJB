import React, { useState } from 'react'
import { useEffect } from 'react'
import {  useParams } from 'react-router'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'

function JobDetailedPage() {
     const {id} = useParams()
   const navigate = useNavigate()
    const [job, setJob] = useState({
        
      id: "",
      title: "",
      category: "",
      employment_type: "",
      salary: "",
      location: "",
      company_name: "",
      company_about: "",
      description: "",
      offers: "",
      what_they_do: ""
      }
    )

    useEffect(()=>{
        const fetchJobs = async ()=>{
             try {
              const response = await fetch(`http://localhost:5000/jobs/${id}`,{
                method: "GET",
                headers:{'Content-Type':'Application/json'},
            
              })
              
              
              if (!response.ok) {
                throw new Error("an error fetching data jobs")
              }
              const data = await response.json()
              // console.log(data)
              setJob(data)
              console.log(job)
             } catch (error) {
              console.log(error)
             }
            }
            console.log("hello world")
            console.log(job)
    
            fetchJobs()
        }, [id])
    

  return (
    <>
     <section>
        <h2 className='text-black p-3 text-2xl'>{job.title}</h2>

        <p className='text-black text-2xl p-2'>{job.location}</p>
        <p className='text-black text-2xl p-2'>{job.employment_type}</p>

        <div className='text-black p-3'>
            <h3 className='text-[20px]'>About us</h3>
            <p>{job.company_about}</p>
        </div>

        <div className='text-black p-3'>
            <h3 className='text-[20px]'>What you'll do</h3>
            <p>{job.what_they_do}</p>
        </div>

        <div className='text-black p-3'>
            <h3 className='text-[20px]'>What we offer</h3>
            <p>{job.offers}</p>
        </div>

        <div className='text-black p-3'>
            <h3 className='text-[20px]'>Job description</h3>
            <p>{job.description}</p>
        </div>
     </section>
    </>
  )
}

export default JobDetailedPage