import React from 'react'
import { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import "../App.css"
const StarRating = () => {
  const [stars,setstars] =useState(Array(5).fill(0))
  const[rating,setRating] =useState(0);
  const [hover,setHover] =useState(0);
  return (
    <>
      {stars.map((star,index)=>{
            return <AiFillStar key={index} onMouseLeave={()=>setHover(rating)} onMouseOver={()=>setHover(index+1)} className={`${hover>index?("star rating"):("star")}`}  onClick={()=>setRating(hover)} size={30}/>
      })}
      </>
  )
}

export default StarRating