import React from 'react'
import logo from '../../assests/logo.png'
import './Navbar.css'

export const Navbar = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-title-wrapper">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <span>Reactore</span>
        </div>
        <button className="cart">
          🛒
        <sup className='cart-items'>0</sup>
        </button>
      </div>
    </header>
  )
}