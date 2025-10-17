import React from 'react'

const Product = ({product}) => {
 const {name, phone} =    product;

  return (
    <div>
        <h1>Name : {name} </h1>
    </div>
  )
}

export default Product