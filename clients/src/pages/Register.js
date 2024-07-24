import React, { useState } from 'react'
import {Box,Typography,Alert,useTheme,Button,TextField,Collapse,useMediaQuery}from '@mui/material'
import toast from "react-hot-toast";
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios";
const Register = () => {
  const theme=useTheme()
  const navigate=useNavigate()
  const isNotMobile=useMediaQuery("(min-width: 1000px)");


  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[error,setError]=useState("")

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      await axios.post("/api/v1/auth/register",{username,email,password})
      toast.success("Registration Successful")
      navigate("/login")
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
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
      >
        <Collapse in={error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>


        <form onSubmit={handleSubmit}>
          <Typography variant="h4" textAlign="center" mb={2}>Sign Up</Typography>
          <TextField 
          label="Username" 
          require 
          margin="normal" 
          fullWidth 
          value={username} 
          onChange={(e)=>{setUsername(e.target.value)}}/>
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
          <Button type='submit' fullWidth variant='contained'size="large" sx={{color:'white',mt:2}}> Sign up</Button>
          <Typography mt={"20px"}> <Link to="/login">Already have an account? Sign In</Link></Typography>
        </form>

      </Box>
  )
}

export default Register