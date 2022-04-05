import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { isloaded, isloading } from './features/counter/Notification-slice';
import { useSelector, useDispatch } from 'react-redux'
import { loadproducts,updateCart } from "./features/counter/cart-action";
import Button from '@mui/material/Button';



export default function Productpage() {
  const itemlist = useSelector((state) => state.product.itemlist)
  const dispatch = useDispatch()
 

  useEffect(() => {
    
     dispatch(loadproducts())
    

  }, [])

  
  return (

    <div className='card  d-flex justify-content-center' id='page1'>

      {
        itemlist.map((item, index) => {
          return <div id='cards' key={`card-${index}`}>
            <Cards data={item} ></Cards>
          </div>
        })
      }

    </div>

  )
}