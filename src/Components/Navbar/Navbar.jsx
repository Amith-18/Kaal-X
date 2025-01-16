import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <div className='navbar-head'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className="navbar-menu">
            <ul className="nav-link">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Service/Product</a></li>
                <li><a href="#">Technolgy</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div className="login">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
        <hr /> 
    </div>
  )
}

export default Navbar