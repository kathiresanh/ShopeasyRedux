import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from '@mui/material/Button';
import { decreaseQuantity, deleteCartItem, increaseQuantity ,} from "./features/counter/user-slice";
import { loadRazorPay, updateCart, updateUserData } from "./features/counter/cart-action";


export default function Tablecart(props) {

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.userdata.cart)

    let deleteCartProduct = (item)=>{
        dispatch(deleteCartItem(item))
        setTimeout(() => {
            dispatch(updateCart(cart))
        }, 1000)

        setTimeout(()=> {
            dispatch(updateUserData())
        },2000)
    }


    let createOrder = (item)=>{
        dispatch(loadRazorPay(item))
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
      }, []);

    return (
        <table class="table p-1">
            <thead>
                <tr>
                    <th scope="col">Product image</th>
                    <th scope="col">product Name</th>
                    <th scope="col">price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total price</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>

                {
                    props.cart.map((item, index) => {
                        return <tr>
                            <th>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={item.productimage}
                                    sx={{ width: 60, height: 60 }}
                                />
                            </th>
                            <td><h5>{item.productname}</h5></td>
                            <td>{item.price} INR</td>
                            <td>
                                <Stack direction="row" spacing={0}>
                               
                                   <div className="p-2">{item.quantity}</div>
                                                                                
                                                                    
                                    <Tooltip title="increase quantity">
                                        <IconButton onClick={() => { dispatch(increaseQuantity(item))}}>
                                            <ArrowUpwardRoundedIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="decrease quantity">
                                        <IconButton onClick={() => { dispatch(decreaseQuantity(item))}}>
                                            <ArrowDownwardIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Stack>
                            </td>
                            <td>{item.total} INR</td>
                            <td>
                                <Stack direction="row" spacing={0}>
                                    <Tooltip title="Delete">
                                        <IconButton onClick={() =>{deleteCartProduct(item)} }>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Button onClick={() => {createOrder(item)}} variant="contained" className="p-1">Buy</Button>
                                </Stack>

                            </td>

                        </tr>
                    })
                }

            </tbody>

        </table>
    )
}