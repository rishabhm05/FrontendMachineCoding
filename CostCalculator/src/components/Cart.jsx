import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../Context/Context'

const Cart = () => {
const[totalcost,setTotalCost] =useState(0);
 const{state:{Cart},dispatch} =useContext(CartContext)
 useEffect(()=>{
    let total =Cart.reduce((acc,prod)=>{
       return acc+prod.price;
    },0)
    setTotalCost(total)
 },[Cart])
  return (
    <div className='cart-summary'>
        <h1>Cart Summary</h1>
       {Cart.map((product)=>{
        return(
        <div className='cart-product'>
          <img width="100px" height="100px" src={product.thumbnail}/>
          <span>{product.price}</span>
        </div>
        )
       })}
       <div>
        <p>TOTAL COST:{totalcost}</p>
       </div>
    </div>
  )
}

export default Cart