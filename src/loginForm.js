import React from "react";
import { useState } from "react";
import axios from "axios";
import Grid from '@mui/material/Grid2';
import Textfield from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'; 
import IconButton from '@mui/material/IconButton'; 
import VisibilityIcon from '@mui/icons-material/Visibility'; 
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

function LoginForm({onLogin}){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const [token,setToken] = useState("");
    const [showPass,setshowPass] = useState(false)

    const handleLogin = async(e)=>{
        e.preventDefault();
        onLogin(email,password);
    }
    const handleClickShowPassword = () => setshowPass(!showPass);
    const handleMouseDownPassword = () => setshowPass(!showPass);
    return(
        <div>
            <form>
            <Grid container spacing={0} direction="row"
      justifyContent="center"
      alignItems="center" >
                <Grid size={{xs:2}}></Grid>
                <Grid container size={{xs:8}} display="flex" justifyContent="center" alignItems="center" direction={"column"} spacing={2}>
                    <h1>Login Form</h1>
                    <Textfield variant="outlined" label="Email" size="small" sx={{width:0.6}}
                    onChange={(e)=>setEmail(e.target.value)} required></Textfield>
                    <Textfield variant="outlined" label="Password" size="small" sx={{width:0.6}} type={showPass ? "text" : "password"}
                    onChange={(e)=>setPassword(e.target.value)} required
                    InputProps={{ 
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                          </InputAdornment>
                        )
                      }}></Textfield>
<Button variant="contained" type="submit">Submit</Button>

                    

                </Grid>
                <Grid size={{xs:2}}></Grid>
            
            </Grid>
            </form>
        </div>
    )
}
export default LoginForm;
