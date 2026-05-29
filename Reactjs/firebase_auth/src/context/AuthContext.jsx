import {createContext, useEffect, useState} from 'react'
import {auth} from '../config/firebase'
import {onAuthStateChanged} from 'firebase/auth'

export const AuthConetxt = createContext()

export const AuthProvider = ({children}) => {

  const [user , setUser] =useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , (currentUser) => {
      setUser(currentUser)
    })

    return () => unsubscribe()
  } , [])

  return (
    <>
      <AuthConetxt.Provider value={{user}}>
        {children}
      </AuthConetxt.Provider>
    </>
  )
}