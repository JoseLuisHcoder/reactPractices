import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
   const nameTrainer = useSelector(state => state.nameTrainer)
console.log(nameTrainer);
    if(nameTrainer){
        return (
            <div>
              <Outlet />
              
            </div>
          )
    } else {
        <Navigate to='/'/>
    }
  
}

export default ProtectedRoutes
