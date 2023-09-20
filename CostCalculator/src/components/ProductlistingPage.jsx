import React, { useContext } from 'react'
import { CartContext } from '../Context/Context'
import SingleProductPage from './SingleProductPage'
import "../App.css"
const ProductlistingPage = () => {
   const {products} =useContext(CartContext)
  console.log(products)
  return (
    <div className="products-lists">
      {products.map((product)=>{
        return <SingleProductPage product={product} key={product.id}/>
      })}
  </div>
    
  )
}

export default ProductlistingPage