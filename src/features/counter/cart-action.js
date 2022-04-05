
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import {replacedata} from "./product-slice"
import { isloaded, isloading, openLogin } from './Notification-slice';
import { adduserdata } from "./user-slice";
import { addtoOrders,deleteCartItem} from './user-slice';



let userdatas = JSON.parse(window.localStorage.getItem("userdata"))


export const loadproducts = () => {
    return async (dispatch) => {

        const fetchhandler = async () => {
                  try {
                    dispatch(isloading())
                await axios.get("https://shopeasyend.herokuapp.com/getproduct").then(function (response) {
                    console.log(response.data)
                    dispatch(isloaded())
                     dispatch(replacedata(response.data))
                    
                       })
            }
            catch (error) {
                console.log(error)
                dispatch(isloaded())
       
            }
        }
        fetchhandler()
    }
}


export const login = (values)=>{
   
    return async (dispatch) =>{
       
        const userlogin = async (values) => {
         
            try {
              dispatch(isloading())
          await axios.post("https://shopeasyend.herokuapp.com/login",values).then(function (response) {
            localStorage.setItem("token",response.data.tokens)
            localStorage.setItem("email",response.data.email)
              let userdata =  JSON.stringify(response.data)
              localStorage.setItem("userdata",userdata)
              dispatch(adduserdata(userdata))
              dispatch(isloaded())
             
          })
      }
      catch (error) {
          alert("user name or password invalid")
          dispatch(isloaded())
 
      }
  }
  userlogin(values)
    }
}


// registr user 


export const RegisterNewUser = (values)=>{
   
  return async (dispatch) =>{
     
      const userregister = async (values) => {
       
          try {
            dispatch(isloading())
        await axios.post("https://shopeasyend.herokuapp.com/register",values).then(function (response) {
              console.log(response)
            dispatch(isloaded())
            dispatch(openLogin())
        })
    }
    catch (error) {
        console.log(error)
        dispatch(isloaded())
        alert("user already registered")

    }
}
userregister(values)
  }
}

// change the forgotten password



export const ChangePassword = (values)=>{
   
  return async (dispatch) =>{
     
      const changePassword = async (values) => {
       
          try {
            dispatch(isloading())
        await axios.put("https://shopeasyend.herokuapp.com/forgot-password",values).then(function (response) {
              console.log(response)
            dispatch(isloaded())
            dispatch(openLogin())
        })
    }
    catch (error) {
        console.log(error)
        dispatch(isloaded())
        alert("something went wrong")

    }
}
changePassword(values)
  }
}


export const updateCart = (values) => {
  
 return async (dispatch) =>{
    const updateDatabase = async (values)=>{
        
        try {
        
           axios.put(`https://shopeasyend.herokuapp.com/updatecart/${window.localStorage.getItem("email")}`,values).then(function(response){
              console.log(response.data)
             
           })
        } catch (error) {
            console.log(error)
           
        }
    } 
    updateDatabase(values)
 }
}

export const updateUserData = () =>{
    return async (dispatch) =>{
         const getUserData = async ()=>{
             try {
                 axios.get(`https://shopeasyend.herokuapp.com/getuserdata/update/${window.localStorage.getItem("email")}`).then(function(response){
                
                     let userdata =  JSON.stringify(response.data)
                     localStorage.setItem("userdata",userdata)
                    
                 })
             } catch (error) {
                 console.log(error)
             }
         }
         getUserData()
        
    }
}


export const sendDataToCart = (values) => {
  
    return async (dispatch) =>{
       const sendItem = async (values)=>{
           
           try {
              
              axios.put(`https://shopeasyend.herokuapp.com/updatecart/${window.localStorage.getItem("email")}`,values).then(function(response){
                 console.log(response.data)
                  
              })
           } catch (error) {
               console.log(error)
           }
       } 
       sendItem(values)
    }
   }



export const loadRazorPay = (values) => {
 

  
    return async (dispatch) =>{
       const loadRazo = async (dispatch,values)=>{
        dispatch(isloading())
        await axios.post("https://shopeasyend.herokuapp.com/createorder", values).then(function (response) {
     
  
      if (response.data.id != null) {
        openPayModal(response.data, values,dispatch)
      }
      dispatch(isloaded())
    })     
      .catch(function (error) {
        console.log(error);
        dispatch(isloaded())
      });
       } 
       loadRazo(dispatch,values)
    }
   }


   

 export  const openPayModal = (data, values,dispatch) => {
       
    const options = {
      "key": "rzp_test_ueXIjC2vVytCtJ", // Enter the Key ID generated from the Dashboard
      "amount": data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Shop Easy",
      "description": "Test Transaction",
      "image": "./images/companylogo.png",
      "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
      "handler": function (response) {
        callSignatureVerify(response, values,dispatch)
        // console.log(response)
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature)
      },
      prefill: {
        name: 'Gaurav',
        contact: '9999999999',
        email: 'demo@demo.com'
      },
      notes: {
        address: 'some address'
      },
      theme: {
        color: 'green ',
        hide_topbar: false
      },
    };
    var rzp1 = new window.Razorpay(options);

    rzp1.open();

}


export const callSignatureVerify = async (response, values,dispatch) => {

    try {
      await axios.post("https://shopeasyend.herokuapp.com/api/payment/verify", response).then(function (response) {
        if (response.data.signatureIsValid) {
          updateOrders(values,dispatch)
        }
      })

    } catch (error) {
      console.log(error)
    }
  }


export const updateOrders =async (item,dispatch) => {

   
            try {
                dispatch(addtoOrders(item))
         await  axios.put(`https://shopeasyend.herokuapp.com/addtoorders/${window.localStorage.getItem("email")}`,item).then(function(response){
               console.log(response.data)
               dispatch(deleteCartItem(item))
            })
         } catch (error) {
             console.log(error)
            
         }
   
  
}
   


