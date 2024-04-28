'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import { LogoWB } from '../../../public'
import Link from 'next/link'
import CustomLink from '@/components/header/CustomLink'
import Button from '@/components/button/Button'
import { useAuth } from '@/app/UserProvider'
import BurgerMenu from '@/components/burger-menu/BurgerMenu'

const dataLinks = [
  { title: 'Домашня', href: '/' },
  { title: 'Навчання', href: '/education' },
  { title: 'Гуртожиток', href: '/dormitory' },
  { title: 'Їдальня', href: '/food' }
]


const Header = () => {
  const { isLoggedIn, logIn, logOut } = useAuth()
  const [opened, setOpened] = useState(false)

  const toggleMenu = () => {
    setOpened(!opened)
  }
  return (
    <header
      className="w-full h-fit py-2 flex flex-row bg-black-pearl px-2 items-center justify-center border-peach border-b ">
      <div className="flex flex-row items-center justify-between w-full gap-2">
        <BurgerMenu toggle={toggleMenu} opened={opened} dataLinks={dataLinks} isLoggedIn={isLoggedIn} />
        <Link href={'/'} className="w-fit h-full mx-auto md:mx-0">
          <Image src={LogoWB} alt="logo" width={120} height={60} />
        </Link>
        <nav className="md:flex flex-row hidden  items-center max-w-[450px] gap-5 w-full justify-between">
          <ul className="list-none flex flex-row items-center gap-1 md:gap-3 lg:gap-5 justify-evenly w-full">
            {dataLinks.map((link, index) => (
              <li key={index}>
                <CustomLink href={link.href} title={link.title} key={index} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden sm:flex flex-row gap-1 md:gap-2 lg:gap-3 items-center">
          {isLoggedIn ? <Button onClick={(e) => logOut(e)}>Вийти</Button> :
            <Button><Link href="/login">Увійти</Link></Button>}
          {isLoggedIn ? null : <Button><Link href="/registration">Зареєструватися</Link></Button>}
        </div>
      </div>
    </header>
  )
}

export default Header
