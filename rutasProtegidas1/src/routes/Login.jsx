import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({changeIsLogged}) => {

    const navigate = useNavigate()
    const handleLogin = () => {
        changeIsLogged()
        navigate('/aboutme')
    }

  return (
    <div>
        <button onClick={handleLogin} >Login</button>
    </div>
  )
}

export default Login