import { createSlice } from '@reduxjs/toolkit'


export const productslice = createSlice({
    name:"product",
    initialState: {
        itemlist: [],
      },
    reducers: {

        replacedata: (state,action)=>{
           state.itemlist = (action.payload)
        },
        increment: (state) => {
    
          state.value += 1
        },
        decrement: (state) => {
          state.value -= 1
        },
        incrementByAmount: (state, action) => {
          state.value += action.payload
        },
      },
})

export const { increment, decrement, incrementByAmount,replacedata } = productslice.actions

export default productslice.reducer