import React from "react";
import Cards from "./Cards";
import { useSelector, useDispatch } from 'react-redux'
import Tableorders from "./Tableorders";

export default function Orders(){

    const orders = useSelector((state) => state.userdata.orders)
    return(
      
        <div className=' d-flex justify-content-center'>

<Tableorders></Tableorders>
        </div>
    )
}