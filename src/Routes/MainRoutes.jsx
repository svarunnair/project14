import React from 'react'
import Signup from '../Pages/Signup'
import Signin from '../Pages/Signin'
import HomePage from '../Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Payment from '../Pages/Payment'



function MainRoutes() {

  
  
  return (
    <div>
        <Routes>

            <Route path='/'element={<HomePage/>}/>
            <Route path='/signup'element={<Signup/>}/>
            <Route path='/signin'element={<Signin/>}/>
            <Route path='/home'element={<HomePage/>}/>
            <Route path='*'element={<h3>"page not found"</h3>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/payment' element={<Payment/>}/>




        </Routes>



    </div>
  )
}

export default MainRoutes