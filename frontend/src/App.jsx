import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Shop from './components/shop';
import Login from './components/admin/login';
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from './components/admin/dashboard';
import AdminRequireAuth from './components/admin/AdminRequireAuth';



function App() {
  

  return (
    <>
        
      <BrowserRouter>
          
            <Routes>
              {/* Public URLs */}
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/admin/login' element={<Login />} />

              {/* Protected Admin URL */}
              <Route
                path='/admin/dashboard'
                element={
                  <AdminRequireAuth>
                    <Dashboard />
                  </AdminRequireAuth>
                }
              />
            </Routes>
          
       </BrowserRouter>

      <ToastContainer />

    </>
  )
}

export default App
