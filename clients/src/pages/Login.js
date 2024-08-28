import React, { useState } from 'react'
import {Box,Typography,Alert,useTheme,Button,TextField,Collapse,useMediaQuery}from '@mui/material'
import toast from "react-hot-toast";
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios";
const Login = () => {
  const theme=useTheme()
  const navigate=useNavigate()
  const isNotMobile=useMediaQuery("(min-width: 1000px)");


  // const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[error,setError]=useState("")

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
     await axios.post("/api/v1/auth/login",{email,password})
    //  if (data.token && data.token.accessToken)
      
      //  toast.success("Login Successful")
       localStorage.setItem("autoToken",true)
       navigate("/")
    
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }

  }

  return (
    <Box 
    width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{
         boxShadow: 5,
         backdropFilter: "blur(10px)", // Apply blur effect
         backgroundColor: theme.palette.background.alt }}
      backgroundColor={theme.palette.background.alt}
      
      >
        <Collapse in={error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>


        <form onSubmit={handleSubmit}>
          
          <TextField 
          type='email'
          label="Email" 
          require 
          margin="normal" 
          fullWidth 
          value={email} 
          
          onChange={(e)=>{setEmail(e.target.value)}}/>
          <TextField 
          type='password'
          label="Password" 
          require 
          margin="normal" 
          fullWidth 
          value={password} 
          onChange={(e)=>{setPassword(e.target.value)}}/>
          <Button type='submit' fullWidth variant='contained'size="large" sx={{color:'white',mt:2}}> Sign In</Button>
          <Typography mt={"20px"}> <Link to="/register">Don't have an account ? Sign up</Link></Typography>
        </form>

      </Box>
  )
}

export default Login