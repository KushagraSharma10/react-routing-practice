import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Services = () => {

    const navigate = useNavigate();

  return (
    <div className='mt-5'>
        <h1 className='text-5xl font-thin mb-5'>Service</h1>
        <button onClick={()=>  navigate("/service/detail")} className='px-4 py-2 mr-3 rounded-md bg-white text-black'>More Details</button>
        <button onClick={()=>  navigate("/service/update")} className='px-4 py-2 rounded-md bg-white text-black'>More Update</button>
        <hr className='my-10' />
        <Outlet />
    </div>
  )
}

export default Services