import { createSlice } from '@reduxjs/toolkit'
import { updateCart } from "./cart-action"
import { useSelector, useDispatch } from 'react-redux'


let userdatas = JSON.parse(window.localStorage.getItem("userdata"))


export const userslice = createSlice({
    name: "userdata",
    initialState: {
        name: userdatas ? userdatas.name : "",
        cart: userdatas ? userdatas.cart : [],
        orders: userdatas ? userdatas.orders : [],
        isloggedin: userdatas ? true : false,

    },
    reducers: {

        adduserdata: (state, action) => {
            localStorage.setItem("userdata", action.payload)
            let userdatas = JSON.parse(window.localStorage.getItem("userdata"))
            state.isloggedin = true
            state.name = userdatas.name
            state.cart = userdatas.cart
            state.orders = userdatas.orders

        },
        addtocart: (state, action) => {

            let newitem = action.payload
            let existingitem = state.cart.find((item) => item._id === newitem._id)
            if (existingitem) {
                existingitem.quantity++;
                existingitem.total = existingitem.total + action.payload.price;
            } else {
                newitem = { ...action.payload, quantity: 1, total: action.payload.price }
                state.cart.push(newitem)
            }
        },

        addtoOrders: (state, action) => {

            let newitem = action.payload
            newitem = { ...action.payload}
            state.orders.push(newitem)

        },

        increaseQuantity: (state, action) => {
            let newitem = action.payload
            let existingitem = state.cart.find((item) => item._id === newitem._id)
            if (existingitem) {
                existingitem.quantity++;
                existingitem.total = existingitem.total + action.payload.price;

            }
        },

        decreaseQuantity: (state, action) => {
            let newitem = action.payload
            let existingitem = state.cart.find((item) => item._id === newitem._id)
            if (existingitem) {
                if (existingitem.quantity > 1) {
                    existingitem.quantity--;
                    existingitem.total = existingitem.total - action.payload.price;
                }
            }
        },

        deleteCartItem: (state, action) => {
            let itemId = action.payload._id
            let existingitem = state.cart.filter((item) => item._id !== itemId)
            state.cart = existingitem
        }

    }
})


export const { adduserdata, addtocart,addtoOrders, increaseQuantity, decreaseQuantity, deleteCartItem } = userslice.actions
export default userslice.reducer