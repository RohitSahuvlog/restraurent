import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


import { Link, useNavigate } from "react-router-dom";


export default function Signin() {
    const navigate = useNavigate()
 
 
 
      const [Form, setForm] = useState({})
      

      const Targetset = (e) => {
       
          setForm({
              ...Form,
              [e.target.name]: e.target.value
          })
  
      }
      // console.log(form)
      const handleSubmit = (e) => {
          e.preventDefault()
          console.log(Form)
         
          localStorage.setItem("signin",JSON.stringify(Form))
          navigate("/login")

      }

  return (
<Box  width="100vw" height="100vh" display={"flex"} justifyContent="center" 
alignItems={"center"}  >


      <Box   boxShadow={5}   >
       
   
        <Grid item xs={12} sm={8}  md={5} height="60vh"  component={Paper}  square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
             
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
               
                autoFocus 
                onChange={Targetset}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={"password"}
            
                id="password"
               
                onChange={Targetset}
              
              />
    
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

             
             
          
            </Box>
            
          </Box>
        </Grid>
      </Box>
      </Box>
  
  );
}
