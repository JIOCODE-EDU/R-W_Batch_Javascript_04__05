import React, { use } from 'react'
import { useState } from 'react'
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Register = () => {


  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const register_user = async() => {
    try{
      await createUserWithEmailAndPassword(auth , email , password)
      alert("Uers Register Successfully!!")

    }catch(err){
      alert(err.message)
    }
  }


  return (
    <div>Register</div>
  )
}

export default Register