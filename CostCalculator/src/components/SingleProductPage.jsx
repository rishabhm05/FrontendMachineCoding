import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/Context'

const SingleProductPage = ({product}) => {
 const{state:{Cart},dispatch} =useContext(CartContext)
 
 const handleCart =()=>{
  dispatch({type:"ADD_TO_CART",
payload:product})
 }
 const removefromCart =(id)=>{
    //console.log(id)
    dispatch({
        type:"REMOVE_FROM_CART",
        payload:{
            id:id}
    })
 }
  return (
    <div className='product-detail'>
        <img className="prod-img" src={product?.images[0]} />
        <div className='prod-description' >
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
        <div>
            {Cart.length>0&&Cart.some((prod)=>prod.id===product.id)?( <button className='removetocart-btn' onClick={()=>removefromCart(product.id)}>Remove from Cart</button>):( <button className='addtocart-btn' onClick={()=>handleCart(product)}>Add To Cart</button>)}
           
        </div>
    </div>
  )
}

export default SingleProductPage