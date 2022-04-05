import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '@mui/material/Avatar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function Tableorders() {

    const dispatch = useDispatch()

    const orders = useSelector((state) => state.userdata.orders)
    return (
        <table class="table p-1">
            <thead>
                <tr>
                    <th scope="col">Product image</th>
                    <th scope="col">product Name</th>
                    <th scope="col">price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total price</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>

                {
                    orders.map((item, index) => {
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
                                {item.quantity}
                            </td>
                            <td>{item.total} INR</td>
                            <td style={{color:"green"}}>
                                Paided <CheckCircleOutlineIcon></CheckCircleOutlineIcon>
                            </td>

                        </tr>
                    })
                }

            </tbody>

        </table>
    )
}