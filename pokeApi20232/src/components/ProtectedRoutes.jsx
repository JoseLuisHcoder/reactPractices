import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

   const nameTraineStore =  useSelector(state => state.nameTraineSlice)

    if(nameTraineStore !== ""){
        return <Outlet />
    } else {
        return <Navigate to='/'/>
    }
 
}

export default ProtectedRoutes
