import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameTrainer } from '../store/slice/nameTrainer.slice'

const Home = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.name.value.trim()
        if(inputValue.length !== 0){
            dispatch(setNameTrainer(inputValue))
            navigate('/pokedex')
        }
        e.target.name.value = ""
    }
  return (
    <div>
      <h1 className='bg-red-500 text-center text-3xl font-bold'>Hi Trainer</h1>
        <form onSubmit={handleSubmit} >
            <input id="name" type="text" placeholder='Enter your name' />
            <button className='bg-red-600 w-20 rounded-md'>Ingresar</button>
        </form>
    </div>
  )
}

export default Home
