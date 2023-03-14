import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './routes/Login'
import Home from './routes/Home'
import { Link, Route, Routes } from 'react-router-dom'
import Contact from './routes/Contact'
import Parent from './routes/Parent'
import AboutMe from './routes/AboutMe'
import Character from './routes/Character'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  const changeIsLogged = () => {
    setIsLogged(true)
  }

  return (
    <div className="App">
      <h3>RUTAS PROTEGIDAS</h3>
      <nav>
        <Link to='/' >Home</Link>
        <Link to='/login' >Login</Link>
        <Link to='/contact' >Contact</Link>
        <Link to='/aboutme' >AboutMe</Link>
        <Link to='/character/:id' >CharacterId</Link>
      </nav>
      <Routes>
        <Route path = '/login' element={<Login changeIsLogged = {changeIsLogged}  />}/>
        <Route path = '/' element = {<Home />} />
        <Route element = {<Parent isLogged = {isLogged} setIsLogged={setIsLogged} />}> 
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutme' element={<AboutMe />} />
        </Route>
        <Route path='/character/:id' element = {<Character />}/>


      </Routes>
    </div>
  )
}

export default App
