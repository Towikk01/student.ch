'use client'
import { useContext, useLayoutEffect, useRef } from 'react'
import CustomSection from '@/components/custom-section/CustomSection'
import Image from 'next/image'
import { Books, Dormitory, Food, Teacher } from '../../public/index'
import Button from '@/components/button/Button'

import ThreadGlobal from '@/components/threads/ThreadGlobal'
import Link from 'next/link'
import { useAuth } from '@/app/UserProvider'

const fakeData = [{
  text: 'Epic night in the dorm! Someone’s Siri kept saying "I\'m watching you" at 3 AM. Turns out it was just Dave\'s new sleep-talking talent. We nearly called an exorcist. #DormLife #ParanormalDave',
  image: Dormitory
}, {
  text: 'Guys, had the mystery stew at the dining hall today. Pretty sure it started moving on my plate. If I don\'t make it to tomorrow\'s lecture, tell my mom I loved her cooking best. #HauntedDinner #RIPMe',
  image: Food
},
  {
    text: 'Today’s lecture on quantum physics made me realize two things: I might be in the wrong class, and if I blink sideways, I can actually see time slowing down. #AccidentalGenius #QuantumConfusion',
    image: Books
  },
  {
    text: 'My math prof just tried to open a PDF with a calculator. And he\'s the one grading our exams? I\'m convinced my future is in the hands of a guy who might lose at tic-tac-toe to a pigeon. #SendHelp #FacepalmAcademia',
    image: Teacher
  }

]
export default function Home() {
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn, logIn, logOut } = useAuth()
  return (
    <CustomSection direction={'row'}>
      <div className="w-full flex flex-col justify-around max-h-[240px]">
        <h1 className="text-2xl text-center font-bold text-primary whitespace-pre">Вітаємо на студент.ч!</h1>
        <h4 className="text-xl text-primary ">Дослідіть студентське життя від гуртожитку до дипломної роботи!</h4>
        <p className="text-base text-[#fff] opacity-80 leading-8">Іміджборд для всіх: від студентів до викладачів,
          кожен може
          висказати та запитати будь-що і будь коли!</p>
        <div className="flex flex-row gap-2 items-center">
          {isLoggedIn ? null : <Button><Link href="/registration">Зареєструватися</Link></Button>}
          {isLoggedIn ? <Button onClick={(e) => logOut(e)}>Вийти</Button> :
            <Button><Link href="/login">Увійти</Link></Button>}
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-3 items-center justify-end">
        <h4 className="text-primary text-2xl">Останні треди</h4>
        <div className="w-full h-full gap-2 grid justify-end">
          {fakeData.map((data, index) => (
            <ThreadGlobal text={data.text} imageUrl={data.image} key={index} />
          ))}
        </div>
      </div>
    </CustomSection>
  )
}
