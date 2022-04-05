import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {replacedata} from "./product-slice"

// import styles from './Counter.module.css'

export function Counter() {
  const[user,setuser] = useState("")
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
 let call = (obj)=>{
  setuser(obj)
 }
  return (
    <div>
      <div>

        <h1>{user}</h1>
        <button className='btn btn-primary'
          aria-label="Increment value"
          onClick={() => dispatch(replacedata())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          // onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <input type="text" name='name' id='name' onChange={()=>{call(document.getElementById("name").value)}}></input>
 
      </div>
    </div>
  )
}