'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import { LogoWB } from '../../../public'
import Link from 'next/link'
import CustomLink from '@/components/header/CustomLink'
import Button from '@/components/button/Button'
import { UserContext } from '@/app/UserProvider'


const Header = () => {
  const isLogged = useContext(UserContext)
  const isUserLoggedIn = useContext(UserContext)
  const dataLinks = [
    { title: 'Домашня', href: '/' },
    { title: 'Навчання', href: '/education' },
    { title: 'Гуртожиток', href: '/dormitory' },
    { title: 'Їдальня', href: '/food' }
  ]
  return (
    <header className="w-full h-fit py-1 flex flex-row bg-black-pearl items-center justify-center bg border-b ">
      <div className="flex flex-row items-center justify-between w-full  max-w-[1280px] px-5">
        <Link href={'/'}>
          <Image src={LogoWB} alt="logo" width={160} height={60} />
        </Link>
        <nav className="flex flex-row items-center max-w-[450px] gap-5 w-full justify-between">
          <ul className="list-none flex flex-row items-center gap-5 justify-between w-full">
            {dataLinks.map((link, index) => (
              <li key={index}>
                <CustomLink href={link.href} title={link.title} key={index} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-row gap-3 items-center">
          <Button><Link href="/login">{isLogged ? 'Увійти' : 'Вийти'}</Link></Button>
          {isLogged && <Button><Link href="/registration">Зареєструватися</Link></Button>}
        </div>
      </div>
    </header>
  )
}

export default Header
