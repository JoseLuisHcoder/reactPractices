import { useState } from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Protected from './components/Protected'
import Contact from './components/Contact'
import CharacterId from './components/CharacterId'
import Login from './components/Login'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  const changeLogged = () => {
    setIsLogged(true)
  }

  return (
    <div className="App">
     <nav>
      <Link to='/'>Home</Link>
      <Link to='/aboutme' >About me</Link>
      <Link to='/contact' >Contact</Link>
      <Link to='/character/:id' >Character</Link>
     </nav>
     <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/login' element={<Login changeLogged = {changeLogged} />} />
      
      <Route element = {<Protected 
      setIsLogged = {setIsLogged}
      isLogged = {isLogged} />}>
          <Route path='/aboutme' element = {<AboutMe />} />
          <Route path='/contact' element = {<Contact />} />
      </Route>
      <Route path='/character/:id' element={<CharacterId />}/>
     </Routes>
    </div>
  )
}

export default App
