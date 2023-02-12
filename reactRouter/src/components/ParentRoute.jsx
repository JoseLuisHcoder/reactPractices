import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ParentRoute = ({isLogged,  setIsLogged }) => {
  const handleLogout = () => {
    setIsLogged()
}

    if(isLogged) {

      return (
        <div>
          <Outlet />
      <button onClick={handleLogout}>Log out</button>
        </div>
      )
    } else {
      return <Navigate to = '/login' />
    }
  
}

export default ParentRoute