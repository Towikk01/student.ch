'use client'
import { Inter, Mohave, Moul, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import { createContext } from 'react'
import React from 'react'
import AuthProvider from '@/app/UserProvider'

const inter = Roboto({ subsets: ['latin'], weight: '400', style: 'normal' })

// export const metadata = {
//   title: 'Student.ch - home page',
//   description: 'Student.ch - imageboard for students'
// }


export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
      <body className={`${inter.className} flex flex-col items-center `}>
      <Header />
      <main className="w-full min-h-[90vh] flex flex-col px-2 sm:px-3.5 md:px-5">
        {children}
      </main>
      </body>
      </html>
    </AuthProvider>
  )
}
