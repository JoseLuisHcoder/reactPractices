import React from 'react'
import {  useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const Home = () => {
    const contador = useSelector(state => state.count)
    const dispatch = useDispatch()

    const rest = () => dispatch(decrement())  
    const resett = () => dispatch(resetCount())
    const add = () => dispatch(increment())
console.log(dispatch);
   return (
    <div>
      <h1>{contador}</h1>
      <button onClick={rest} >-1</button>
      <button onClick={resett}>reset</button>
      <button onClick={add}>+1</button>
    </div>
  )
}

export default Home
