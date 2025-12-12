import React from 'react'
import Hero from '../components/Hero'
import AllJobs from '../components/AllJobs'

export const Home = () => {
  return (
    <div>
        <Hero />
        <AllJobs showAll={true}/>
    </div>
  )
}
