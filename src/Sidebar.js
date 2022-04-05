import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

import Button from '@mui/material/Button';

export default function Sidebar(props) {
    let total = 0;
    const cartitems = useSelector((state) => state.cart.cartitem)

    cartitems.forEach(element => {
        total = total + element.total;
    });

    return (

        <div className='card' id='page2'>
            <div className="d-flex justify-content-end p-3">
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
            </div>
            <Button variant="contained">Hello World</Button>

            <table id="table">
                <tbody>
                    <tr>
                        <th>Product name</th>
                        <th>produc price</th>
                        <th>quantity</th>
                        <th>total</th>
                    </tr>
                    {
                        cartitems.map((item) => {
                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.total}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <h3>Total : {total}</h3>



        </div>

    )
}