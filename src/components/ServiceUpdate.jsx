import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceUpdate = () => {

    const navigate = useNavigate();

  return (
    <div className='mt-10'>
        <h1 className='text-5xl font-thin mb-5'>Service Update</h1>
        <h1 className='text-3xl font-thin mb-3'>Service Update Krwalo...</h1>
        <button onClick={()=>  navigate(-1)} className='px-4 py-2 rounded-md bg-white text-black'>Go Back</button>
    </div>
  )
}

export default ServiceUpdate