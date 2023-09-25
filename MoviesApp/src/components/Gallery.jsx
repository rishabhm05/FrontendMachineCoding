import React, { useEffect, useState } from 'react'
import SingleImage from './SingleImage'

const Gallery = () => {
const[images,setImages] =useState([])
 useEffect(()=>{
    fetchimages()
 },[])
 const fetchimages =async ()=>{
   let url=`https://api.unsplash.com/photos?page=1&query=office&client_id=a2K5BPhFuU94c1EmBHk6iZ-V0S3CjibDGweOIKfDweo`
   let res=  await fetch(url)
   res=await res.json();
setImages([...res])
}
  return (
    <div className='p-[3rem] grid md:grid-cols-4 gap-2 grid-cols-1'>
        {
            images.map((image)=>{
                return <SingleImage image={image?.urls?.small} key={image.id} alt_description={image?.alt_description}/>
            })
        }
    </div>
  )
}

export default Gallery