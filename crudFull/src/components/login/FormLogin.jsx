import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'

const FormLogin = () => {
    const {register, handleSubmit, reset} = useForm()

    const submit = data => {
            const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
            axios.post(url, data)
                .then(res => {
                    localStorage.setItem('token', res.data.token)
                })
                .catch(err => console.log(err))

            reset({
                email:'',
                password:''
            })
    }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)} >
        <div>
            <label htmlFor="">Email</label>
            <input {...register('email')} type="email" id='email' placeholder='Ingresa tu email' />
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input {...register('password')} type="password" id='password' placeholder='Ingresa tu contraseña' />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default FormLogin
