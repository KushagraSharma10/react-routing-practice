import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceDetail = () => {

    const navigate = useNavigate();

  return (
    <div>
        <h1 className='text-5xl font-thin my-5'>More Services</h1>
        <h2 className='text-3xl font-thin mb-4'>Choose us...</h2>
        <button onClick={()=>  navigate(-1)} className='px-4 py-2 rounded-md bg-white text-black'>Go Back</button>
    </div>
  )
}

export default ServiceDetail