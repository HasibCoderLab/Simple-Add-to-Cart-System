import React from 'react'

const Product = ({product}) => {
 const {name, phone,website,email} =    product;

  return (
    <div className='border-2 border-sky-800 m-2 py-8'>
        <h1>Name : {name} </h1>
        <p>Phone : {phone} </p>
        <h2>Website : {website} </h2>
        <p>Email : {email} </p>
        <button className='bg-emerald-600 mt-3'> Add to cart </button>
    </div>
  )
}

export default Product