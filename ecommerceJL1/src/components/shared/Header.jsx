import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/header.css"

const Header = () => {
  return (
    <header className = 'header-container'>
        <nav>
            <ul className = 'header__icons'>
                <li className = 'header__icon-title'><Link to = "/"><span className = 'header__icon-ecommerce'>e-commerce</span></Link></li>
                <li className = 'header__icon-login'><Link to = '/login'><i className='bx bx-user'></i></Link></li>
                <li className = 'header__icon-purchase'><Link to = '/purchases'><i className='bx bx-box'></i></Link></li>
                <li className = 'header__icon-cart'><Link to = '/cart'><i className='bx bx-cart'></i></Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header