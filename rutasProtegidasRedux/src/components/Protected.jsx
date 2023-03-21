import React from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import Login from './Login'

const Protected = ({isLogged, setIsLogged}) => {
    
    if(isLogged){
        return (
            <div>
              <Outlet />
              <button onClick={() => setIsLogged()} >Log out</button>
            
            </div>
          )
    } else {
        return <Navigate to='/login'/>
    }
  
}

export default Protected
