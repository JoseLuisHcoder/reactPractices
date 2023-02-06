import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormUser from './components/FormUser'
import CardUser from './components/CardUser'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  

  const getAllUsers = () => {
    const url = 'https://users-crud.academlo.tech/users/'
    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => { 
    getAllUsers()
  }, [])

  const createNewUser = data => {
    const url = 'https://users-crud.academlo.tech/users/'
    axios.post(url, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
      
  }

  const deleteUserById = (id) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.delete(url)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.put(url, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err))
  
  }
  
  
  return (
    <div className="App">
      <FormUser
      createNewUser = {createNewUser}
      updateInfo = {updateInfo}
      updateUserById = {updateUserById}
      setUpdateInfo = {setUpdateInfo}
      />
      {
        users?.map(user => (
          <CardUser
          key = {user.id}
          user = {user}
          deleteUserById = {deleteUserById}
          setUpdateInfo = {setUpdateInfo}
          />
        ))
      }
      
    </div>
  )
}

export default App
