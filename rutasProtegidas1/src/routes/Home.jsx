import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsShow } from '../store/slice/isShow.slice'
import { decrement, increment, reseteador } from '../store/slice/user.slice'

const Home = () => {

    const user = useSelector(state => state.counterJL)
    const dispatch = useDispatch()

    const rest = () => dispatch(decrement())
    const reset = () => dispatch(reseteador())
    const add = () => dispatch(increment())

    const show = useDispatch(state => state.isShow)
    const handleIsShow = () => show(changeIsShow())
    
  return (
    <div>
        <h2>Home</h2>
        <div>
            <p>{user}</p>
            <button onClick={rest}>rest</button>
            <button onClick={reset}>reset</button>
            <button onClick={add}>add</button>
        </div>
        
        <button onClick={handleIsShow}>isShow</button>
    </div>
  )
}

export default Home