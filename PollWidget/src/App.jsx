import { useState } from 'react'
import { polldata } from './data'
import './App.css'
import PollWidget from './components/PollWidget'

function App() {
  

  return (
    <div className='App'>
      <h1>Poll Widget</h1>
      <PollWidget data={polldata}/>
    </div>
  )
}

export default App
