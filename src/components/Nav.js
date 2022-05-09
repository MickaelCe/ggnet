import React from 'react'
import "../components-css/Nav.css";
import { NavLink } from 'react-router-dom';
import Burger from "./Burger";

const Nav = () => {
  return (
      <div className='Navbar'>
        <div className='Navbar__container'>
          <img src={require('../assets/logofull.png')} alt='gamergate logo'/>
          <nav className='Navbar__menu'>
            <NavLink to='/search' className='Navbar__link'>
              <span className='underline'>Search</span>
            </NavLink>
            <NavLink to='/home' className='Navbar__link'>
              <span className='underline'>Home</span>
            </NavLink>
            <NavLink to='/contact' className='Navbar__link'>
              <span className='underline'>Contact</span>
            </NavLink>
        </nav>
        <Burger/>
        </div>
      </div>
  )
}

export default Nav