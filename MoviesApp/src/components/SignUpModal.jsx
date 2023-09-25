import React from 'react'
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useScrollTrigger } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PRIVATEUSER } from '../store/AuthenticationSlice';
const SignUpModal = ({open,setOpen}) => {
 const[Userid,setUserId] =useState("")
 const[password,setPassword] =useState("");
 const[errormsg,seterrormsg] =useState(false);
 const {UserList}=useSelector((state)=>state.Authentication)
 const dispatch =useDispatch()
 const handleClose=()=>{
   setOpen(false)
 }
 const handleSubmit =(e)=>{
  e.preventDefault();
  let userfind = UserList.some((user)=>user.userid===Userid&&user.password===password)
  if(userfind){
  dispatch(SET_PRIVATEUSER(true))
  localStorage.setItem("username",JSON.stringify(Userid))
  localStorage.setItem("isloggedin",JSON.stringify(true))
  setOpen(false);
  seterrormsg(false)
  }
  else{
   seterrormsg(true)
  }
 }
  return (
    <Dialog open={open} onClose={handleClose} >
     <DialogContent sx={{width:'100%'}}>
    {errormsg&&<p className='text-[red] text-2xl'>Invalid Credentials</p>}
     <form className='flex flex-col justify-between gap-10 min-h-[250px] min-w-[250px]' onSubmit={handleSubmit} >
     <TextField
            autoFocus
            margin="dense"
            id="userid"
            label="User id"
            type="email"
            fullWidth
            variant="standard"
            required
            onChange={(e)=>setUserId(e.target.value)}
            autoComplete='true'
          />
       <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            required
            autoComplete='true'
            onChange ={(e)=>setPassword(e.target.value)}
          />
          
           <Button  type="submit" variant='contained' color="primary">Log In</Button>
     </form>
     </DialogContent>
    </Dialog>
  )
}

export default SignUpModal