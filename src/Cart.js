import React, { useEffect } from "react";
import Cards from "./Cards";
import { useSelector, useDispatch } from 'react-redux'
import Tablecart from "./Tablecart";
import { ElevenMp } from "@mui/icons-material";
import { updateCart, updateUserData } from "./features/counter/cart-action";
import Orders from "./Orders";



export default function Cart() {
    const dispatch = useDispatch()


    const cart = useSelector((state) => state.userdata.cart)
    const orders = useSelector((state) => state.userdata.orders)
    console.log(cart)
    let total = 0;

    useEffect(() => {
        
            setTimeout(() => {
                dispatch(updateCart(cart))
            }, 1000)

            setTimeout(()=> {
                dispatch(updateUserData())
            },2000)
        
    }, [cart])


    return (<div className="container">
        <div className='d-flex justify-content-center p-1' id='page1'>
            <Tablecart cart={cart}></Tablecart>

        </div>
        <div className="d-flex justify-content-end ">
            {

                cart.forEach((element) => {
                    total = element.total + total
                })
            }
            <h3>Total : {total}</h3>
        </div>
    </div>


    )
}