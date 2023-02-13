import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({isLogged, setIsLogged}) => {
    const handleLogOut = () => {
        setIsLogged()
    }


  if(isLogged){
    return (
        <div>
            <Outlet />
            <button onClick={handleLogOut}>LogOut</button>       
        </div>
    )
  } else {
    return <Navigate to='/login' />
  }
}

export default ProtectedRoute