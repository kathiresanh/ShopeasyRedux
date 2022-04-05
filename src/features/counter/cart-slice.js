import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { act } from 'react-dom/test-utils'

export const cartslice = createSlice({
    name: "cart",
    initialState: {
        cartitem: [],
        total: 0,
        quantity: 0,

    },
    reducers: {
        // addtocart: (state, action) => {
        //     let newitem = action.payload
        //     let existingitem = state.cartitem.find((item) => item.id === newitem.id)
        //     if (existingitem) {
        //         existingitem.quantity++;
        //         existingitem.total = existingitem.total + action.payload.price;
        //     } else {
        //         newitem = { ...action.payload, quantity: 1, total: action.payload.price }
        //         state.cartitem.push(newitem)
        //     }
        // },
        removecart: (state) => {
            alert("this is remove cart")
        }
    }
})


export const { addtocart,removecart} = cartslice.actions
export default cartslice.reducer