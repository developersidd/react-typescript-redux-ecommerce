import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../redux/features/auth/authSlice';
import { apiSlice } from '../features/api/apiSlice';
import productReducer from '../features/product/productSlice';

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    product: productReducer,
    userAuth: authReducer
  },
  middleware: (gDM) => gDM().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});
