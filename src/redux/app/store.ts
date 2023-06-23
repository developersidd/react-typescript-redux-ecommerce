import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import authReducer from '../../redux/features/auth/authSlice';
import cartReducer from '../../redux/features/cart/cartSlice';
import filterReducer from '../../redux/features/filter/filterSlice';
import { apiSlice } from '../features/api/apiSlice';
import productReducer from '../features/product/productSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['api'],
}

export const rootReducers = combineReducers({
  api: apiSlice.reducer,
  product: productReducer,
  userAuth: authReducer,
  cart: cartReducer,
  filter: filterReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (gDM) => gDM({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
