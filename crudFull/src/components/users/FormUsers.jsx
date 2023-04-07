import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'

const FormUsers = ({createNewUser, updateUserId}) => {
    const {register, handleSubmit, reset} = useForm()
    useEffect(() => {
        reset(updateUserId)
    }, [updateUserId])
const handleCreate = data => {
     createNewUser(data)
   
    reset({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phone:""
    })
}
  return (
    <form onSubmit={handleSubmit(handleCreate)} >
        <ul>
            <li>
                <label htmlFor="firstName">FirstName </label>
                <input {...register('firstName')}id = "firstName" type="text" placeholder='enter your firstname' />
            </li>
            <li>
                <label htmlFor="lastName">LasttName </label>
                <input {...register('lastName')}id = "lastName" type="text" placeholder='enter your lastname' />
            </li>
            <li>
                <label htmlFor="email">Email  </label>
                <input {...register('email')}id = "email" type="email" placeholder='enter your email' />
            </li>
            <li>
                <label htmlFor="password">Password  </label>
                <input {...register('password')}id = "password" type="password" placeholder='enter your password' />
            </li>
            <li>
                <label htmlFor="phone">Phone  </label>
                <input {...register('phone')}id = "phone" type="text" placeholder='enter your phone' />
            </li>
        </ul>
        <button>Create</button>
    </form>
  )
}

export default FormUsers
