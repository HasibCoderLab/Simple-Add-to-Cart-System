import React from 'react'

const Product = ({product , addToCart}) => {
 const {name, phone,website,email} =    product;

  return (
    <div className='border-2 border-sky-800 m-2 py-8 sm:py-1 '>
        <h1>Name : {name} </h1>
        <p>Phone : {phone} </p>
        <h2>Website : {website} </h2>
        <p>Email : {email} </p>
        <button onClick={ () => addToCart(product)} className='bg-emerald-600 p-4 mt-3 rounded-2xl cursor-pointer '> Add to cart </button>
    </div>
  )
}

export default Product