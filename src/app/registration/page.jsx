'use client'
import React, { useState } from 'react'
import CustomSection from '@/components/custom-section/CustomSection'
import Button from '@/components/button/Button'

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    secondName: '',
    nickname: '',
    role: 'Користувач',
    password: '',
    confirmPassword: ''
  })
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.')
      setFormData({ ...formData, password: '', confirmPassword: '' })
    } else {
      setFormData({
        name: '',
        secondName: '',
        nickname: '',
        role: 'Користувач',
        password: '',
        confirmPassword: ''
      })
    }
  }


  return (
    <CustomSection direction="col" center="items-center">
      <h1 className="text-4xl text-primary">Реєстрація</h1>
      <form className="grid w-3/4 bg-black-pearl p-3 gap-3 justify-stretch rounded-xl" onSubmit={handleSubmit}>
        <h2 className="text-primary text-xl text-center mt-4">Заповніть дані нижче для початку користування
          іміджбордом.</h2>
        <div className="grid gap-y-1.5 gap-x-5">
          <label className="col-span-2 text-primary">Імʼя та прізвище</label>
          <input type="text" placeholder="Ім’я" name="name"
                 className="p-2 border border-primary rounded-md" required
                 value={formData.name}
                 onChange={handleChange} />
          <input type="text" placeholder="Прізвище" name="secondName" className="p-2 border border-primary rounded-md"
                 required value={formData.secondName}
                 onChange={handleChange} />
        </div>
        <div className="grid gap-y-1.5">
          <label className="text-primary">Нікнейм</label>
          <input type="text" placeholder="Нікнейм" className="p-2 border border-primary rounded-md"
                 name="nickname"
                 value={formData.nickname}
                 onChange={handleChange}
                 required />
        </div>
        <div className="grid">
          <label className="text-primary">Роль</label>
          <select className="px-1 py-3 text-black-pearl" value={formData.role}
                  onChange={handleChange}>
            <option>Користувач</option>
            <option>Адміністратор</option>
            <option>Модератор</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-1.5">
          <label className="col-span-2 text-primary">Пароль</label>
          <input type="password" placeholder="Пароль" name="password" value={formData.password}
                 onChange={handleChange} className="p-2 border border-primary rounded-md"
                 required />
          <input type="password" placeholder="Підтвердження паролю" value={formData.confirmPassword}
                 onChange={handleChange} name="confirmPassword"
                 className="p-2 border border-primary rounded-md" required />
        </div>
        <div className="mt-4">
          <Button width="w-full" type="submit">Зареєструватися</Button>
        </div>
      </form>
    </CustomSection>
  )
}

export default RegistrationPage
