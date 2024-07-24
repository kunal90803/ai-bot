import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Navbar = () => {
  const loggedIn = localStorage.getItem("autoToken") === "true";
  // console.log(loggedIn)
  const navigate = useNavigate();

  const handleLogout = () => {
    
    try{
      axios.post("/api/v1/auth/logout")
      localStorage.removeItem("autoToken");
      toast.success("Logout SuccessFully")
    navigate("/login");}
    catch(error){
      console.log(error)

    }
  };

  return (
    <Box width={"100%"} p="1rem 6%" textAlign={"center"} sx={{ boxShadow: 3, mb: 2 }}>
      <Typography variant="h1" color="primary" fontWeight="bold">CHAT-BOT</Typography>
      {loggedIn ? (
        <>
          <Link to="/" style={{ padding: "1rem" }}>
            Home
          </Link>
          <Link to="/login" onClick={handleLogout} style={{ padding: "1rem" }}>
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/register" style={{ padding: "1rem" }}>
            Sign Up
          </Link>
          <Link to="/login" style={{ padding: "1rem" }}>
            Sign In
          </Link>
        </>
      )}
    </Box>
  );
}

export default Navbar;
