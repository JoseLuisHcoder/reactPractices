import React, { useEffect, useRef } from 'react'

const FormUser = ({createUsers, updateInfo, updateUserById, setUpdateInfo}) => {

    const formData = useRef()

    useEffect(() => {
        if(updateInfo){
        formData.current.first_name.value = updateInfo.first_name
        formData.current.last_name.value = updateInfo.last_name
        formData.current.email.value = updateInfo.email
        formData.current.password.value = updateInfo.password
        formData.current.birthday.value = updateInfo.birthday
        }else {

        }

    }, [updateInfo])

    const handleSubmit = e => {
        e.preventDefault()
        const data = {
            first_name:e.target.first_name.value,
            last_name:e.target.last_name.value,
            email:e.target.email.value,
            password:e.target.password.value,
            birthday:e.target.birthday.value

        }
        if(updateInfo){
            //*UPDATE
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        }else {
            //*CREATE
            createUsers(data)
        }
        e.target.first_name.value = ""
        e.target.last_name.value = ""
        e.target.email.value = ""
        e.target.password.value = ""
        e.target.birthday.value = ""
    }
  return (
    <form ref={formData} onSubmit={handleSubmit}>
    <ul>
        <li>
            <label htmlFor="email">Email</label>
            <input  type="email" id="email" placeholder='email' />
        </li>
        <li>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='password' />
        </li>
        <li>
            <label htmlFor="first_name">Firstname</label>
            <input  type="text" id="first_name" placeholder='firstname' />
        </li>
        <li>
            <label htmlFor="last_name">Lastname</label>
            <input  type="text" id='last_name' placeholder='lastname' />
        </li>
        <li>
            <label htmlFor="birthday">Birthday</label>
            <input type="date" id='birthday' placeholder='birthday' />
        </li>
    </ul>
    
    <button>{updateInfo ? 'Update User' : 'Create User' }</button>

</form>
  )
}

export default FormUser