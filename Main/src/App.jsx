import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { useState } from 'react'
import Cart from './Components/Cart/Cart'
import Mesa5 from './Mesa5'
import Form from './Components/Form/Form'

function App() {
  const [cart, setCart] = useState([])

  console.log(cart)
  const add = (item) => {
    setCart([...cart, item])
  }
  return (
    <div className='App'>
      {/* <Mesa5/> */}
      
      <Navbar/>
      <Cart cart={cart}/>
      <Form/>
      <Home add={add}/>
      
    </div>
  )
}

export default App
