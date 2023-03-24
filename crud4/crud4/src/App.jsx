import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'

import axios from 'axios'
import CardUsers from './components/CardUsers'

function App() {
  const [users, setUsers] = useState()
  const [updateInfo, setUptdateInfo] = useState()

  const getAllUsers = () =>{
    const url = 'https://crudusers.onrender.com/api/v1/users'
    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }
console.log(users);
useEffect(() => {
  getAllUsers()
}, [])

const createNewUSer = data => {
  const url = 'https://crudusers.onrender.com/api/v1/users'
  axios.post(url, data)
    .then(res => getAllUsers())
    .catch(err => console.log(err))
}

const deleteById = id => {
  const url = `https://crudusers.onrender.com/api/v1/users/${id}`
  axios.delete(url)
    .then(res => getAllUsers())
    .catch(err => console.log(err))

} 
 const updateById = (id, data) => {
    const url = `https://crudusers.onrender.com/api/v1/users/${id}/`
    axios.patch(url, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
 }
  return (
    <div className="App">
     <Form 
     createNewUSer = {createNewUSer}
     updateById = {updateById}
     updateInfo = {updateInfo}
     setUptdateInfo = {setUptdateInfo}
     />
     {
      users?.map(user => (
        <CardUsers 
        key = {user.id}
        user = {user}
        deleteById = {deleteById}
        setUptdateInfo = {setUptdateInfo}
         />
      ))
     }

    </div>
  )
}

export default App
