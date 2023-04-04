import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTraine } from '../store/slice/nameTraine.slice'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleNameTrainer = e => {
        e.preventDefault()
        const inputValue = e.target.name.value.trim();
        if(inputValue !== 0){
            dispatch(setNameTraine(inputValue))
            e.target.name.value = ""
            navigate('/pokedex')
        } 
        
    }
  return (
    <div>
      <h2>Hi Trainer</h2>
      <p>To start give me your trainer name</p>
      <form onSubmit={handleNameTrainer} >
        <input type="text" id='name' />
        <button>Ingresar</button>

      </form>
    </div>
  )
}

export default Home
