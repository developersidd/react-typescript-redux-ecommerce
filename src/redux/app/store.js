import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../redux/features/auth/authSlice';
import cartReducer from '../../redux/features/cart/cartSlice';
import { apiSlice } from '../features/api/apiSlice';
import productReducer from '../features/product/productSlice';

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    product: productReducer,
    userAuth: authReducer,
    cart: cartReducer
  },
  middleware: (gDM) => gDM().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});
