import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/pokedex'>Pokedex</Link>
        <Link to='/pokedex/:name'>Pokemon details</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:name' element={<PokemonDetails />}   />
        </Route>

      </Routes>
    </div>
  )
}

export default App
