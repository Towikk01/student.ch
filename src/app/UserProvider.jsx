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
       username: localStorage.getItem('username'),
      password: localStorage.getItem('password')

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

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      // User is logged in, set isLoggedIn to true
      setIsLoggedIn(true);
      // Fetch user details or setAuthUser if needed
    } else {
      // User is not logged in, set isLoggedIn to false
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
