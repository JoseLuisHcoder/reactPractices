import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { getUsers } from '../store/slice/users.slice'

import UsersInfo from './users/UsersInfo'
import FormUsers from './users/FormUsers'
import axios from 'axios'
import getConfig from './utils/getConfig'


const Home = () => {
const [updateUserId, setUpdateUserId] = useState()

    const dispatch = useDispatch()
   const usersGlobal = useSelector(state => state.usersStore)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const createNewUser = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        axios.post(url, data)
            .then(res => dispatch(getUsers()))
            .catch(err => console.log(err))
    }
    const deleteUserById = id => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users/${id}`
        axios.delete(url, getConfig())
            .then(res => dispatch(getUsers()))
            .catch(err => console.log(err))
    }

    const updateUserById = (data, id) => {
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users/${id}`
        axios.put(url, data, getConfig())
            .then(res => dispatch(getUsers()))
            .catch(err => console.log(err))
    
    }   
  return (
    <div>
      <h3>Home</h3>
      <h2>Users</h2>
      <FormUsers
      createNewUser={createNewUser}
      updateUserId={updateUserId}
      />
    {
        usersGlobal?.map(user => (
            <UsersInfo  
            key={user.id} 
            user={user}
            deleteUserById={deleteUserById}
            setUpdateUserId={setUpdateUserId}
            
            />
        ))
    }
    </div>
  )
}

export default Home

// https://e-commerce-api-v2.academlo.tech/api/v1/users