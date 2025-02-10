import Home from './home';
import LoginForm from './loginForm'
import './App.css';
import React, { useState} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';

function App() {

  const [isLoggedIn, setIsLoggedIn]=useState(false);

  const handleLogin = async(email, password) =>{
    try{
      const response = await
      axios.post("http://example.com/api/login", {email,password});
      if(response.data.token){
        setIsLoggedIn(true);
      }
      }catch(err){
        console.log("Login Failed",err);
    }
  }
  return (
    <div>
      {isLoggedIn ? <Home />:<LoginForm onLogin={handleLogin}/>}
    </div>
  );
}

export default App;
