import React from 'react'
import {BrowserRouter,Routes,Route } from "react-router-dom"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Navbar from './components/Navbar'
import Logout from './pages/logout/Logout'
import Footer from './components/Footer'
import ViewUsers from './pages/user/ViewUsers'
function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin/viewUsers" element={<ViewUsers />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
