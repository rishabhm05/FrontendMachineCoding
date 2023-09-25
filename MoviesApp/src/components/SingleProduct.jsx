import React from 'react'

const SingleProduct = ({product}) => {
  return (
    <div className='flex flex-col text-3xl border-2 border-[whitesmoke]  max-h-[400px] justify-between p-[3rem]  rounded-md'>
        <img src ={product?.images[0]}  width="100%" className='object-center h-[250px]' />
        <div className='flex justify-between'>
        <p>{product?.title}</p>
        <p>{product?.price}</p>
        </div>
    </div>
  )
}

export default SingleProduct