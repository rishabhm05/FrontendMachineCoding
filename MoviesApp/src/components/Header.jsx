import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import "../App.css"
import { Link } from 'react-router-dom';
import { SET_PRIVATEUSER } from '../store/AuthenticationSlice';
import LinearProgress from '@mui/material/LinearProgress';

const Header = ({open,setOpen}) => {
  const dispatch = useDispatch();
 const {isPrivateUser} = useSelector((store)=>store.Authentication)
 const{loading} =useSelector((store)=>store.Products)
 let userid = JSON.parse(localStorage.getItem("username"))
 const handleLogOut =()=>{
  dispatch(SET_PRIVATEUSER(false))
 localStorage.removeItem("isloggedin")
 localStorage.removeItem("username")
 }
  return (
    <div>
        {!isPrivateUser?(
        <>
        <AppBar position="static" sx={{width:'100%'}}>
        {loading&&<LinearProgress color="secondary" />}
  <Toolbar>
    <div className='grow'>
    <Link to="/" >
      <Typography variant="h6" component="div" sx={{ fontSize: '3rem', cursor: 'pointer' }}>
        MovieApp
      </Typography>
    </Link>
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/"><Button color='inherit'>Home Page</Button></Link>
      <Button color='inherit'>About Us</Button>
      <Button color="inherit" onClick={() => setOpen(true)}>Login</Button>
    </div>
  </Toolbar>
</AppBar>

     </>
        ):(
          <>
        
        <AppBar position='static' sx={{width:'100%'}}>
            {/* <Toolbar>
            <div className='md:grow'>
            <Link to="/"><Typography variant="h6" component="div" sx={{ flexGrow: 1 ,fontSize:'3rem', cursor:'pointer' }}>
            MovieApp
          </Typography>
         
          </Link>
          </div>
            <Link to="/"><Button color='inherit'>Home Page</Button></Link>
            <Link to="/gallery"><Button color='inherit'>Gallery</Button></Link>
            <Button color='inherit'>About Us</Button>
            <Button color="inherit">{userid}</Button>
            <Button color="inherit" onClick={handleLogOut}>LogOut</Button>
          </Toolbar> */}
          <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6}>
            <Link to="/">
              <Typography variant="h6" component="div" sx={{ fontSize: '3rem', cursor: 'pointer',
            
           
            '@media only screen and (max-width: 768px)': {
              textAlign: 'center', // Center text for small screens
            },
            
            }}>
                MovieApp
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="flex-end">
              <Link to="/">
                <Button color="inherit">Home Page</Button>
              </Link>
              <Link to="/gallery">
                <Button color="inherit">Gallery</Button>
              </Link>
              <Button color="inherit">About Us</Button>
              <Button color="inherit">{userid}</Button>
              <Button color="inherit" onClick={handleLogOut}>
                LogOut
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
        </AppBar>
        </>
        )}
    </div>
  )
}

export default Header