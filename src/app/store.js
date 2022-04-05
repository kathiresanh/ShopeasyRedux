import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import productSlice from '../features/counter/product-slice'
import cartSlice from '../features/counter/cart-slice'
import { notificationSlice } from '../features/counter/Notification-slice'
import { userslice } from '../features/counter/user-slice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    product: productSlice,
    cart:cartSlice,
    notification: notificationSlice.reducer,
    userdata : userslice.reducer,
  },
})