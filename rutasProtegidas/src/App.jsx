import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import CharacterId from './components/CharacterId'
import Contact from './components/Contact'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
const [isLogged, setIsLogged] = useState(false)

const changeIsLogged = () =>{
  setIsLogged(true)
}


  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/aboutme'>AboutMe</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/character/:id'>Character</Link>

      </nav>

     <Routes>
      <Route  path='/login' element={<Login changeIsLogged = {changeIsLogged} />}/>
      
      <Route element={<ProtectedRoute isLogged = {isLogged} setIsLogged = {setIsLogged} />}>
         <Route path='/' element={<Home />}/>
         <Route path='/aboutme' element={<AboutMe />}/> 
         <Route path='/contact' element={<Contact />}/> 
      </Route>
      <Route path='/character/:id' element={<CharacterId />} />
     </Routes>
    </div>
  )
}

export default App
