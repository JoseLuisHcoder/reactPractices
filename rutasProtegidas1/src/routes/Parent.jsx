import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Parent = ({isLogged, setIsLogged}) => {
    const handleLogOut = () => {
        setIsLogged()
    }

if(isLogged){
    return (
        <div>
            <Outlet />
            <button onClick={handleLogOut}>Log out</button>
        </div>
      )
} else {
    return <Navigate to='/login' />
}

}

export default Parent