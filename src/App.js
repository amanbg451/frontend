import React from 'react'
import Home from './Pages/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/login" element = {<Login />} />
      <Route path = "/register" element = {<Register />} />
      <Route path = "/" element = {<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
