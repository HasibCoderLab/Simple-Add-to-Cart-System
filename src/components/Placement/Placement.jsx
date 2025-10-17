import React from 'react'
import SingleCart from '../SingleCart/SingleCart';

const Placement = ({cart}) => {
   
    
  return (
    <div>
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