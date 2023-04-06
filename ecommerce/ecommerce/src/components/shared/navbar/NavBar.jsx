import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
        <NavLink to='/'>
            <h1>JLECOMMERCE</h1>
        </NavLink>
        <NavLink 
        to='/'
        className={({isActive}) => isActive ? 'active-link' : ''}
        >
            <h1>Inicio</h1>
        </NavLink>
        <NavLink 
        to='/login'
        className={({isActive}) => isActive ? 'active-link' : ''}
        >
            <h1>Login</h1>
        </NavLink>
        <NavLink to='/purchases'
        className={({isActive}) => isActive ? 'active-link' : ''}
        >
            <h1>PURCHASES</h1>
        </NavLink>
        <NavLink to='/cart'
        className={({isActive}) => isActive ? 'active-link' : ''}
        >
            <h1>CART</h1>
        </NavLink>
    </nav>
  )
}

export default NavBar
