import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    //     <div className='navbar-head'>
    //       <div className='logo'>
    //         <img src={logo} alt="" />
    //       </div>
    //       <div className="navbar-menu">
    //         <ul className="nav-link">
    //           <li><a href="#">Home</a></li>
    //           <li><a href="#">About Us</a></li>
    //           <li><a href="#">Service/Product</a></li>
    //           <li><a href="#">Technolgy</a></li>
    //           <li><a href="#">Contact Us</a></li>
    //         </ul>
    //       </div>
    //       <div className="login-form">
    //         <button className='login'>Log In</button>
    //         <button className='signup'>Sign Up</button>
    //       </div>
    //       <div>
    //        <hr/>
    //       </div>

    //     </div>
    //   )
    // }


    <div className="navbar-head">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="KaalX Logo" />
      </div>

      {/* Navigation Links */}
      <div className="navbar-menu">
        <ul className="nav-link">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Service/Product</a></li>
          <li><a href="#">Technology</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      {/* Login and Signup Buttons */}
      <div className="login-form">
        <button className="login">Log In</button>
        <button className="signup">Sign Up</button>
      </div>

      {/* Horizontal Divider */}
      <hr />
    </div>
  );
};

export default Navbar