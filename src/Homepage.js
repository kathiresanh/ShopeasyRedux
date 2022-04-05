import React from "react";
import Loginpage from "./Loginpage";
import Productpage from "./Productpage";
import { useSelector, useDispatch } from 'react-redux'
import Circularprogress from './Circular-progress';
import Notification from "./Notification";
import Register from "./Register";
import Forgotpassword from "./Forgotpassword";


export default function Homepage(){

    const loginpage = useSelector((state) => state.notification.Loginpage)
    const Registerpage = useSelector((state) => state.notification.Registerpage)
    const Forgotpage = useSelector((state) => state.notification.Forgotpage)
    // const loading = useSelector((state) => state.notification.open)
    return(
        <div className="row">
                     <div className='col-sm-12 d-flex justify-content-center'>
      {/* {loading && <Notification></Notification>} */}
      </div>
            <div className="col-sm-8">
   
             <Productpage></Productpage>
            </div>
            <div className="col-sm-4 d-flex-justify-content-center">
            {loginpage && <Loginpage></Loginpage>}
             {Registerpage && <Register></Register>}
             {Forgotpage && <Forgotpassword></Forgotpassword>}
            </div>

        </div>
    )
}