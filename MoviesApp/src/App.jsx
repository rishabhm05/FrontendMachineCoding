import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import SignUpModal from './components/SignUpModal'
import Gallery from './components/Gallery'
import ProtectedRoutes from './components/ProtectedRoutes'
import Footer from './components/Footer'

function App() {
  //to open modal
  const[open,setOpen] =useState(false)
  return (
    <>
      <Header  open={open} setOpen={setOpen}/>
      <SignUpModal open={open} setOpen={setOpen}/>
      
      <Routes>
      
      <Route path='/' element={<Home/>}/>
      
      <Route path="/gallery" element ={<ProtectedRoutes><Gallery/></ProtectedRoutes>}/>
      </Routes>
      <Footer/>
    </>
    
  )
}

export default App
