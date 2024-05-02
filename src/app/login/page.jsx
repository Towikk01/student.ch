'use client'
import React, { useState } from 'react'
import CustomSection from '@/components/custom-section/CustomSection'
import Button from '@/components/button/Button'
import { useRouter } from 'next/navigation'
import { logIn } from '@/lib/slices/userSlice/userSlice'
import { useDispatch } from 'react-redux'


const LoginPage = () => {
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    nickname: '',
    password: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    e.preventDefault()
    setUserData({
      ...userData,
      [id]: value
    })
  }

  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logIn({ nickname: userData.nickname, password: userData.password }))
    console.log(userData)
    setUserData({
      nickname: '',
      password: ''
    })
    router.push('/')
  }

  return (
    <CustomSection direction="col" center="items-center justify-center">
      <div className="flex flex-col items-center bg-black-pearl border border-orange gap-4 rounded-xl py-2 px-4">
        <h4 className="text-[20px] sm:text-4xl text-center text-primary">Увійти в особистий кабінет</h4>
        <form className="grid grid-cols-2 gap-x-2 gap-y-1.5 place-items-stretch w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="nickname" className="text-primary">Нікнейм</label>
            <input type="text" id="nickname" className="input p-1 text-black-pearl rounded-sm"
                   onChange={handleChange} value={userData.nickname} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-primary">Пароль</label>
            <input type="password" id="password" className="input text-black-pearl p-1 rounded-sm"
                   onChange={handleChange} value={userData.password} />
          </div>
          <div className="col-span-2">
            <Button type="submit" width="w-full">Увійти</Button>
          </div>
        </form>
      </div>
    </CustomSection>
  )
}

export default LoginPage
