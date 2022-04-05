import * as React from 'react';
import Card from '@mui/material/Card';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import { addtocart } from './features/counter/user-slice';
import { loadproducts,updateCart,updateUserData} from "./features/counter/cart-action";



export default function Cards(props) {

  let isloggedin = useSelector((state) => state.userdata.isloggedin)
  const cart = useSelector((state) => state.userdata.cart)
  const dispatch = useDispatch()

  let sendDataToCart = (element)=>{
    dispatch(addtocart(element))
    setTimeout(()=>{
      dispatch(updateCart(cart))
    },1000)

    setTimeout(()=> {
      dispatch(updateUserData())
  },2000)
  
    
    }

    // useEffect(()=>{
    //    if(cart.length!==0){
      
    //    }
    // },[cart])

  return (
    <Card sx={{ maxWidth: 230 }} id="card-data" className='shadow'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          width="230"
          image={props.data.productimage}
          alt="green iguana"
        />
        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div">
            <h5> {props.data.productname}</h5>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className='d-flex justify-content-end p-2'>
     {isloggedin &&  <Button variant="contained" onClick={()=>{sendDataToCart(props.data)}}>Add to cart</Button>}
        </div>
    </Card>
  );
}
