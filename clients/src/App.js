// // import { useMemo } from 'react';
// import './App.css';
// // import { createTheme } from '@mui/material';
// import{Routes,Route}from "react-router-dom"
// import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import {Toaster} from "react-hot-toast";
// import Summary from './pages/Summary';
// import Paragraph from './pages/Paragraph';
// import Chatbot from './pages/Chatbot';

// import Codegen from './pages/Codegen';

// function App() {
//   return (
//     <>
//       <Navbar/>
//       <Toaster />
//       <Routes>
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/register" element={<Register/>}/>
//         <Route path="/" element={<HomePage/>}/>
//         <Route path="/summary" element={<Summary/>}/>
//         <Route path="/paragraph" element={<Paragraph/>}/>
//         <Route path="/chatbot" element={<Chatbot/>}/>
//         <Route path="/codegen" element={<Codegen/>}/>
        
//       </Routes>
      
//     </>
//   );
// }

// export default App;



import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph';
import Chatbot from './pages/Chatbot';
import Codegen from './pages/Codegen';
import ProtectedRoute from './components/Protected_Route';

function App() {
  const loggedIn = localStorage.getItem("autoToken") === "true";

  return (
    <>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute isLoggedIn={loggedIn} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/codegen" element={<Codegen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
