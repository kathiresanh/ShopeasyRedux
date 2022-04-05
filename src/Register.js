import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from "formik";
import { RegisterNewUser } from "./features/counter/cart-action";
import { useNavigate } from "react-router-dom";
import { openLogin } from "./features/counter/Notification-slice";



export default function Register(){

    const navigate = useNavigate();
    const isloggedin = useSelector((state) => state.userdata.isloggedin)
    const dispatch = useDispatch()
    // formik library for form-validation
    {isloggedin && navigate("/product") }
    const formik = useFormik({
        initialValues: {
          name:"", 
          email:'',
          phone:"",
          password:"",
          cart:[],
          orders:[],
        },
        onSubmit: values => {
            dispatch(RegisterNewUser(values))
        },
      });


    return(
        <div className="card d-flex justify-content-center">
        <div className="d-flex justify-content-center">
        <div className="card-title"><h4>REGISTER</h4></div>
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
      id="name"
      name="name"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.name}
      label="User Name"

    />
             <TextField
      required
      id="email"
      name="email"
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email}
      label="User email"

    />
              <TextField
      required
      id="phone"
      name="phone"
      type="number"
      onChange={formik.handleChange}
      value={formik.values.phone}
      label="Phone Number"

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

    
         <Button type="submit" variant="contained">Register</Button>
     
         <div className="d-flex justify-content-end p-2">
   <Button variant="text" onClick={()=>{dispatch(openLogin())}}>Go to Login</Button>

   </div>
    
</Box>


            </div>     


    </div>            
      
    )
}