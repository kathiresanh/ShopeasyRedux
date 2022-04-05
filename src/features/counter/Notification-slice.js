import { fabClasses } from '@mui/material'
import { createSlice } from '@reduxjs/toolkit'

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    open: false,
    Loginpage:true,
    Registerpage:false,
    Forgotpage:false,
  },
  reducers: {
    isloading: (state) => {

      state.open = true
    },
    isloaded: (state) => {
      state.open = false
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    openRegister : (state) =>{
      state.Loginpage = false
      state.Forgotpage = false
      state.Registerpage = true
    },
    openLogin : (state) =>{
      state.Loginpage = true
      state.Forgotpage = false
      state.Registerpage = false
    },
    openForgot : (state) => {
      state.Loginpage = false
      state.Registerpage = false
      state.Forgotpage=true
    }
  },
},)

// Action creators are generated for each case reducer function
export const { isloading, isloaded,openRegister,openLogin,openForgot } = notificationSlice.actions

export default notificationSlice.reducer