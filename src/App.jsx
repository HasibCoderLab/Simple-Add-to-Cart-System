
import './App.css'
import Placement from './components/Placement/Placement'
import Products from './components/Products'


function App() {
  
  const addToCart = () =>{
    console.log("Clicked");
    
  }

  return (
  <div className ='flex gap-x-6'>
   <Products addToCart = {addToCart}></Products>
   <Placement></Placement>
  </div>
  )
}

export default App
