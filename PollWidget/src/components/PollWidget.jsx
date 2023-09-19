import React from 'react'
import SinglePoll from './SinglePoll'
import { useState } from 'react'

const PollWidget = ({data}) => {
const[totalvalue,settotalvalue] =useState(0);

  return (
    <div className='polls' >
      {data.map((poll)=>{
        return <SinglePoll poll={poll} key={poll.id} settotalvalue={settotalvalue} totalvalue={totalvalue}/>
      })}
    </div>
  )
}

export default PollWidget