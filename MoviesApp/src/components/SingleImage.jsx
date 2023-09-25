import React from 'react'
import { useState } from 'react'
const SingleImage = ({image,alt_description}) => {
  const[open,setOpen] =useState(false)
  const toggleopen =()=>{
    setOpen(!open)
  }
  return (
    <div>
        <img onClick={toggleopen} src={image} alt={alt_description} className='w-[100%] h-[250px] object-cover cursor-pointer transition-transform transform hover:scale-105 '/>
        {open&&
         <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center z-50'>
         <img className='relative w-[80%] h-[80%]' src={image} />
         <button
              className="absolute top-2 right-6 text-white text-[6rem]"
              onClick={toggleopen}
            >
              &times;
            </button>
        </div>
        }
    </div>
  )
}

export default SingleImage