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
      <h1 className="text-base md:text-4xl text-primary">Реєстрація</h1>
      <form
        className="flex flex-col md:grid w-full border border-orange place-content-center md:w-3/4 bg-black-pearl md:px-2 py-2 px-0.5 gap-3 md:justify-stretch rounded-xl"
        onSubmit={handleSubmit}>
        <h2 className="text-primary text-base md:text-xl text-center mt-4">Заповніть дані нижче для початку користування
          іміджбордом.</h2>
        <div className="flex flex-col w-full md:grid md:grid-cols-2 place-items-center gap-y-1.5 px-3.5 gap-x-5">
          <label className="md:col-span-2 text-primary">Імʼя та прізвище</label>
          <input type="text" placeholder="Ім’я" name="name"
                 className="md:px-2 py-2 px-0.5 text-black-pearl w-full border border-primary rounded-md" required
                 value={formData.name}
                 onChange={handleChange} />
          <input type="text" placeholder="Прізвище" name="secondName"
                 className="md:px-2 py-2 px-0.5 border w-full text-black-pearl border-primary rounded-md"
                 required value={formData.secondName}
                 onChange={handleChange} />
        </div>
        <div className="flex flex-col md:grid gap-y-1.5 px-3.5 place-items-center ">
          <label className="text-primary">Нікнейм</label>
          <input type="text" placeholder="Нікнейм"
                 className="md:px-2 w-full py-2 px-0.5 text-black-pearl border border-primary rounded-md"
                 name="nickname"
                 value={formData.nickname}
                 onChange={handleChange}
                 required />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-x-5 gap-y-1.5 px-3.5 place-items-center">
          <label className="md:col-span-2 text-primary">Пароль</label>
          <input type="password" placeholder="Пароль" name="password" value={formData.password}
                 onChange={handleChange} className="p-2 w-full text-black-pearl border border-primary rounded-md"
                 required />
          <input type="password" placeholder="Підтвердження паролю" value={formData.confirmPassword}
                 onChange={handleChange} name="confirmPassword"
                 className="p-2 border border-primary w-full text-black-pearl rounded-md" required />
        </div>
        <div className="mt-4 w-full flex justify-center">
          <Button width="w-fit md:w-full" type="submit">Зареєструватися</Button>
        </div>
      </form>
    </CustomSection>
  )
}

export default RegistrationPage
