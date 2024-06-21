// import { Outlet } from "react-router-dom"
// import Navbar from "./components/Navbar"


// function App() {
//   return(
//     <div>
//       <Navbar/>
//       <br />
//       <br />
//       <Outlet/>
//     </div>
//   )  
// }

// export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import User from './pages/User'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>      
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/user' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App