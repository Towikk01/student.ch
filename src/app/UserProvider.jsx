'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}


const AuthProvider = ({ children }) => {

  const logIn = (e) => {
    e.preventDefault()
    setIsLoggedIn(true)
    setAuthUser({
      name: 'John Doe',
      nickname: 'JD'
    })
  }
  const logOut = (e) => {
    e.preventDefault()
    setIsLoggedIn(false)
    setAuthUser(null)
  }

  const [authUser, setAuthUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(null)

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    logIn,
    logOut
  }

  // useEffect(() => {
  //   const subscribe = AuthService.subscribe((user) => {
  //     if (user) {
  //       setIsLoggedIn(true)
  //       setAuthUser(user)
  //     } else {
  //       setIsLoggedIn(false)
  //       setAuthUser(null)
  //     }
  //   })
  // })

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider