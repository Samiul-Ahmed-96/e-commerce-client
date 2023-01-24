import { configureStore } from '@reduxjs/toolkit';
import apiSlice from "../features/api/apiSlice";
import cartSlice from '../features/cart/cartSlice';
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart : cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
