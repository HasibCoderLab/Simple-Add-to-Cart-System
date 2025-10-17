import React from 'react'

const SingleCart = ({singleData}) => {
const {name , website} =singleData;
    
  return (
    <div>
        <h2> Name : {name} </h2>
        <p> Website : {website}</p>
    </div>
  )
}

export default SingleCart