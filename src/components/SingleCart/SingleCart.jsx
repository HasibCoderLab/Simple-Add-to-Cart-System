import React from 'react'

const SingleCart = ({singleData}) => {
const {name , website, } =singleData;
    
  return (
    <div>
      <hr />
        <h2> Name : {name} </h2>
        {/* <p> Website : {website}</p> */}
        <hr />
    </div>
  )
}

export default SingleCart