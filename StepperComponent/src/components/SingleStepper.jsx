import React from 'react'

const SingleStepper = ({stepper,index,currentcomponent}) => {
  return (
   <div className='single-stepper'>
    <div className={`stepper ${index===currentcomponent?("active"):("")}`}>
        <span className=''>{stepper.id}</span>
      
    </div>
    
  </div>

  )
}

export default SingleStepper