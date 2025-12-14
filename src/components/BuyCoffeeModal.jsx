import React from 'react'
import { FiCoffee } from "react-icons/fi";

const BuyCoffeeModal = ({handleShowModal}) => {
    const coffeePrice = [3, 5, 10]
  return (
    <div className='w-full h-screen backdrop-blur-2xl bg-white/10 absolute top-0 left-0 flex flex-col justify-center items-center'>
       

        <div className='w-[470px] h-[238px] bg-[#CCCCCC] px-2'>
            <div>
                <h4 className='font-medium'>Support Oyjb</h4>
                <p>Help us keep this platform free for job seekers by buying us a coffee!</p>
            </div>
            <div className='flex gap-4 items-center justify-center py-3'>
                {coffeePrice.map((item, index)=>(
                    <div className='flex flex-col justify-center items-center py-3 bg-[#999999]'>
                        <FiCoffee className='text-2xl' />
                        <button className='w-[100px]' key={index}>${item}</button>
                    </div>
                ))}
            </div>
            <div className='flex gap-3 justify-center'>
                <button onClick={handleShowModal} className='w-[200px] text-center py-2 border'>Cancel</button>
                <button className='w-[200px] text-center py-2 border'>Donate</button>
            </div>
        </div>

    </div>
  )
}

export default BuyCoffeeModal