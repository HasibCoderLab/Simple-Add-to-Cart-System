import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products , setProducts] =  useState([])
    useEffect(() =>{
        fetch("FakeData.json")
        .then(res => res.json())
        .then(data => setProducts(data))
        // .then(data => console.log(data)
        
    },[])
  return (
    <div>
        <h1> length :{products} </h1>
    </div>
  )
}

export default Products