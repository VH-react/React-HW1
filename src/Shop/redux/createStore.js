import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import productsReducer from "./slices/products";
import authReducer from './slices/auth';

export default () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer,
      auth: authReducer
    },
    middleware: [...getDefaultMiddleware()],
    devTools: true
  })
}
