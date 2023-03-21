import React from 'react'

const Login = ({changeLogged}) => {
  return (
    <div>
      <button onClick={() => changeLogged()} >Login</button>
    </div>
  )
}

export default Login
