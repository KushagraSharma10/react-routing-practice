import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetail = () => {

    const navigate = useNavigate();
    const params = useParams();

    

  return (
    <div className='mt-10'>
        <h1 className='text-4xl font-thin mb-3'>{params.name}</h1>
        <h2 className='text-2xl font-thin mb-5'>Product details...</h2>
        <button onClick={()=>  navigate(-1)} className='px-4 py-2 rounded-md bg-white text-black'>Go Back</button>
    </div>
  )
}

export default ProductDetail