import React from 'react'
import "./App.css"
import Navbar from "./components/navbar"
import Home from "./pages/home"
import Parameter from './pages/parameter'
import User from './pages/user'
import Login from './pages/login'
import Blog from './pages/blog'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/parameter' element={<Parameter/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </Router>
  )
}

export default App