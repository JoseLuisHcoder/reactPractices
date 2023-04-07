import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route, NavLink} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import UserInfo from './components/UserInfo'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <NavLink to='/'
          className={({isActive}) => isActive ? 'active-link' : ''}
        >
          <h2>Home</h2>
        </NavLink>
        <NavLink to='/contact'
          className={({isActive}) => isActive ? 'active-link' : ''}
        >
          <h2>Contact</h2>
        </NavLink>
        <NavLink to='/userinfo/:id'
          className={({isActive}) => isActive ? 'active-link' : ''}
        >
          <h2>User Info</h2>
        </NavLink>
        <NavLink to='/login'
          className={({isActive}) => isActive ? 'active-link' : ''}
        >
          <h2>Login</h2>
        </NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route>
            <Route path='/contact' element={<Contact />} />
            <Route path='/userinfo/:id' element={<UserInfo />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
