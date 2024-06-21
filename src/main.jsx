import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import User from './pages/User.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//       <Route path='user' element={<User/>}/>
//       <Route path='contact' element={<Contact/>}/>
//       <Route path='about' element={<About/>}/>
//     </Route>
//   )
// )
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router}/>
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)