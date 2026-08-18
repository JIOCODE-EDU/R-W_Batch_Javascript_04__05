import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContent'


const Login = () => {

  const navigate = useNavigate()

  const {login} = useAuth()


  return (
    <div>Login</div>
  )
}

export default Login