import React from 'react'
import SingleCart from '../SingleCart/SingleCart';

const Placement = ({cart}) => {
   
    
  return (
    
    <div>
        <h1>Add to cart : {cart.length}</h1>
        {
            cart.map(singleData =>  <SingleCart
            key = {singleData.id}
            singleData = {singleData}
            ></SingleCart>)
        }
    </div>
  )
}

export default Placement