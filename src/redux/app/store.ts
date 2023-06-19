import authReducer from '../../redux/features/auth/authSlice';
import cartReducer from '../../redux/features/cart/cartSlice';
import { apiSlice } from '../features/api/apiSlice';
import productReducer from '../features/product/productSlice';
import filterReducer from '../../redux/features/filter/filterSlice';

import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    product: productReducer,
    userAuth: authReducer,
    cart: cartReducer,
    filter: filterReducer
  },
  middleware: (gDM) => gDM().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;
