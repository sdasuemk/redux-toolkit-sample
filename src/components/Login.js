import React from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from '../features/user'

const Login = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => {
            dispatch(login({
                name: 'Soumya', age: 30,email: 'das@mail.com'
            }))
        }}>Login</button>
        <button onClick={() => {
            dispatch(logout())
        }}>Logout</button>
    </div>
  )
}

export default Login