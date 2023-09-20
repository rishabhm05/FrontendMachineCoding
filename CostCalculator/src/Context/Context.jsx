import React, { createContext, useEffect, useReducer, useState } from 'react'
import { CartReducer } from './Reducer';
export const CartContext =createContext();
const Context = ({children}) => {
  const [products,setProducts] =useState([]);
  const[state,dispatch] =useReducer(CartReducer,{
    Cart:[]
  })
  useEffect(()=>{
     fetchproducts();
  },[])
  const fetchproducts = async()=>{
  let url = `https://dummyjson.com/products`
  let res = await fetch(url)
  res= await res.json();
  setProducts([...res.products])
  }
  return (
    <div>
    <CartContext.Provider value={{products,state,dispatch}}>{children}</CartContext.Provider>
    </div>
  )
}

export default Context