import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/home'
import Cart from './pages/Cart/cart'
import PlaceOrder from './pages/PlaceOrder/placeOrder'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/order' element={<PlaceOrder />} />
    </Routes>
    </div>
  )
}

export default App