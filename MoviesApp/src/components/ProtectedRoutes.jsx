import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
  const {isPrivateUser} =useSelector((state)=>state.Authentication)
  if(!isPrivateUser)
  return (
    <Navigate to="/"></Navigate>
  )
  else{
    return children;
  }
}

export default ProtectedRoutes