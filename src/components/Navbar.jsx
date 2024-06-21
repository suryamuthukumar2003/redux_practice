import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav >
        <h1>Hello</h1>
        <ul>
            <Link to="/" className='list'>Home</Link>
            <Link to="/user" className='list'>User</Link>
            <Link to="/contact" className='list'>Contact</Link>
            <Link to="/about" className='list'>About</Link>
        </ul>
    </nav>
  )
}

export default Navbar