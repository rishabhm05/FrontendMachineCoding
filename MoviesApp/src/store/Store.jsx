import { configureStore } from "@reduxjs/toolkit";
import AuthenticationSlice from "./AuthenticationSlice";
import ProductsSlice from "./ProductsSlice";
const Store= configureStore({
  reducer:{
    Authentication:AuthenticationSlice,
    Products:ProductsSlice
  }
})
export default Store;