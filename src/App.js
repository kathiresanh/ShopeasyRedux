import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
  Navigate
} from "react-router-dom";
import Topbar from './Topbar';
import { useSelector, useDispatch } from 'react-redux'
import { addtocart, removecart } from './features/counter/cart-slice';
import Menu from './Menu';
import Homepage from './Homepage';
import Homeproduct from './Homeproduct';
import Cart from './Cart';
import Orders from './Orders';
import Notification from './Notification';
import Register from './Register';





function App() {
        
  
  let isloggedin = useSelector((state) => state.userdata.isloggedin)
  const loading = useSelector((state) => state.notification.open)
 return (
  <BrowserRouter>
    <div className="container-fluid">
      <div className='row'>
        <div className='col-sm-12 fixed-top p-0'>
        <Topbar></Topbar>
        </div>
        <div className='col-sm-12'>
        {loading && <Notification></Notification>}
        {!isloggedin && <Homepage></Homepage>}
       
       
      
     {
       isloggedin &&   <Routes>
       {/* <Route path='/' element={<Homepage></Homepage>}></Route> */}
       <Route path="/" element={<Homeproduct></Homeproduct>}></Route>
       <Route path="/product" element={<Homeproduct></Homeproduct>}></Route>
       <Route path='/cart' element={<Cart></Cart>}></Route>
       <Route path='/orders' element={<Orders></Orders>}></Route>
     </Routes>
     }
     
        </div>
        <div className='col-sm-6'>
     
        </div>
        <div className='col-sm-12'>


        </div>
        <div className='col-sm-12 fixed-bottom'>
        
        </div>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
