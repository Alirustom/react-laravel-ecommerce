import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Shop from './components/shop';
import Login from './components/admin/login';

function App() {
  

  return (
    <>
        
        <BrowserRouter>
           <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/shop' element={<Shop/>} />
            <Route path='/admin/login' element={<Login/>} />
           </Routes> 
        </BrowserRouter>

    </>
  )
}

export default App
