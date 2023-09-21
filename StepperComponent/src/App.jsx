import { useState } from 'react'

import './App.css'
import Stepper from './components/Stepper'

function App() {
 const steppers =[
  {"id":1,"label":"Select a campaign"},
  {"id":2,"label":"Create an ad group"},
  {"id":3,"label":"Create an ad"}
 ]
const components =[<Component1/>,<Component2/>,<Component3/>]
  return (
    <div className='App'>
    <Stepper steppers={steppers} components={components}/>
    </div>
  )
}
const Component1 =()=>{
  return(
    <div>
      Hello1
    </div>
  )
}
const Component2 =()=>{
  return(
    <div>
      Hello2
    </div>
  )
}
const Component3 =()=>{
  return(
    <div>
      Hello3
    </div>
  )
}
export default App
