import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Login = ({changeIsLogged}) => {
    const navigate = useNavigate()
    const handleChange = () => {
        changeIsLogged()
        navigate('/')
    }
  return (
    <div>
        <button onClick={handleChange}>Login</button>
    </div>
  )
}

export default Login