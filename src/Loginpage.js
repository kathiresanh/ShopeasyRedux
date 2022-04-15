import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from "formik";
import { login } from "./features/counter/cart-action";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { openRegister,openForgot } from "./features/counter/Notification-slice";
import { useState } from "react";


export default function Loginpage(){

    const navigate = useNavigate();
    const isloggedin = useSelector((state) => state.userdata.isloggedin)
    const dispatch = useDispatch()
    // formik library for form-validation
    {isloggedin && navigate("/product") }
    
    
     const [emails,setemails] = useState({email:"hkathiresan@gmail.com", password:"kathir"})
 
 let setlogin = ()=>{
   formik.setValues(emails)
  }
 
 
    const formik = useFormik({
        initialValues: {
          email: '',
          password:"",
        },
        onSubmit: values => {
            dispatch(login(values))
        },
      });


    return(
        <div className="card d-flex justify-content-center">
            <div className="d-flex justify-content-center">
            <div className="card-title"><h4>LOGIN</h4></div>
            </div>
            <div className="d-flex justify-content-center p-3">
         
            <Box
      component="form"
      onSubmit={formik.handleSubmit}
           sx={{
        '& > :not(style)': { m: 1, width: '80%' },
      }}
    
      autoComplete="on"
    >
                 <TextField
          required
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          label="User email"
    
        />
         {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <TextField
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          required
          label="Password"
          autoComplete="current-password"
        /> 
   
        
             <Button type="submit" variant="contained">Login</Button>
         
             <div className="d-flex justify-content-end p-2">
      <Button variant="text" onClick={()=>{dispatch(openRegister())}}>New user?</Button>
       <Button size="small" onClick={()=>{dispatch(openForgot())}}>Forgot password</Button>
       </div>

<div className="d-flex justify-content-end p-2"><button className="btn btn-primary" onClick={()=>{setlogin()}}>Credentials</button></div>
        
    </Box>
  
  
                </div>     
   

        </div>
    )
}
