
import { useState } from 'react'
import './App.css'
import Placement from './components/Placement/Placement'
import Products from './components/Products'


function App() {
 const  [cart , setCart] =  useState([]);

  const addToCart = (placement) =>{
    const newPlacement = [...cart , placement];
    setCart(newPlacement);
    
  }

  return (
  <div className ='flex gap-x-6'>
   <Products addToCart = {addToCart}></Products>
   <Placement cart = {cart}></Placement>
  </div>
  )
}

export default App
