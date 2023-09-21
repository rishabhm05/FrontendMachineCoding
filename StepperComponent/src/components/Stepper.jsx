import React, { useEffect, useState } from 'react'
import SingleStepper from './SingleStepper'

const Stepper = ({steppers,components}) => {
    const[currentcomponent,setcurrentcomponent] =useState(0);
    const[progress,setprogress] =useState(0);
    useEffect(()=>{
     calculateprogress();
    },[currentcomponent])
    const calculateprogress =()=>{
        let newprogress =Math.floor((currentcomponent+1)/components.length*100)
        setprogress(newprogress)
    }
    const handleprev =()=>{
        setcurrentcomponent((currentcomponent)=>currentcomponent-1)
    }
    const handlenext =()=>{
        setcurrentcomponent((currentcomponent)=>currentcomponent+1)
    }
    console.log(progress)
  return (
    <>
    <div className='stepper-wrapper'>
    <div className='steppers'>
        {steppers.map((stepper,index)=>{
            return <SingleStepper stepper={stepper} index={index} currentcomponent={currentcomponent}/>
        })}
    
    </div>
     <div className={`stepper-line`}></div>
     <div className='label'>
     {steppers.map((stepper)=>{
        return <span>{stepper.label}</span>
     })}
     </div>
     <div className='stepper-btn'>
     <button onClick={handleprev} disabled={currentcomponent===0}>Prev</button>
     <button onClick={handlenext} disabled={currentcomponent===components.length-1}>Next</button>
     </div>
    
     </div>
     {components[currentcomponent]}
  </>
  )
}

export default Stepper