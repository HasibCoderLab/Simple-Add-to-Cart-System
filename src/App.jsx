
import './App.css'
import Placement from './components/Placement/Placement'
import Products from './components/Products'


function App() {
  

  return (
  <div className ='flex gap-x-6'>
   <Products></Products>
   <Placement></Placement>
  </div>
  )
}

export default App
