import React from 'react'
import "../App.css"
import { useState } from 'react'
import { useEffect } from 'react';
const SinglePoll = ({poll,totalvalue,settotalvalue}) => {
const [value,setvalue] =useState(0);
const [progress,setprogress] =useState(0);
 const handleclick =()=>{
    setvalue(value+1)
    settotalvalue(totalvalue+1)
 }
 useEffect(()=>{
    calculatepercentage()
 },[totalvalue])
 const calculatepercentage = ()=>{
  if(totalvalue>0){
  let newprogress =  Math.floor(value/totalvalue*100)
  setprogress(newprogress)
  }
 }
  return (
    <div className='poll' onClick={handleclick}>
        <div className='poll-data'>
        <span className='poll-label'>{poll.label}</span>
        <span className='poll-value'>{progress}%</span>
        </div>
     <div className='progress' style={{transform:`translateX(${-(100-progress)}%)`}}>

     </div>
    </div>
  )
}

export default SinglePoll