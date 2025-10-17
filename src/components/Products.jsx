import React, { useEffect, useState } from 'react'
import Product from './Product/Product'

const Products = () => {
  const [products , setProducts] =  useState([])
    useEffect(() =>{
        fetch("FakeData.json")
        .then(res => res.json())
        .then(data => setProducts(data));
        // .then(data => console.log(data)
        
    },[])
  return (
    <div>
        {
            products.map(product => <Product
            key = {product.id}
            product = {product}
            ></Product>)
        }
      
    </div>
  )
}

export default Products