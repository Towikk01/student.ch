'use client'
import React from 'react'
import ThreadGlobal from '@/components/threads/ThreadGlobal'
import { useSelector } from 'react-redux'
import { selectStudyThreads } from '@/lib/slices/study-threads/studyThreadsSlice'

// const educationThreads = [
//   {
//     imageUrl: '/images/exam.jpg',
//     role: 'Отличник',
//     date: '24.04.2024',
//     id: '№2',
//     title: 'Секрет успеха',
//     replyUrl: '/education/success-secret',
//     text: 'Деликатно спрашиваю: кто-нибудь знает, где в универе валяется ответ на вопрос жизни, вселенной и всего такого? Сессия на носу!'
//   },
//   {
//     imageUrl: '/images/books.jpg',
//     role: 'Книжный червь',
//     date: '24.04.2024',
//     id: '№3',
//     title: 'Библиотечная загадка',
//     replyUrl: '/education/library-mystery',
//     text: 'Слушайте, кто-то оставил записку в библиотеке: "Встретимся в полночь у старого каталога". Это новый квест или что?'
//   },
//   {
//     imageUrl: '/images/homework.jpg',
//     role: 'Лентяй',
//     date: '24.04.2024',
//     id: '№4',
//     title: 'Домашка? Не, не слышал...',
//     replyUrl: '/education/homework-who',
//     text: 'Эмм, ребят, кто-нибудь в курсе, что было на дом? Я был занят... изучением образа жизни кошек.'
//   },
//   {
//     imageUrl: '/images/graduation.jpg',
//     role: 'Выпускник',
//     date: '24.04.2024',
//     id: '№5',
//     title: 'Кепка в полете!',
//     replyUrl: '/education/graduation-cap',
//     text: 'Совет выпускникам: кидая кепку вверх, цельтесь в декана! Легенда гласит, это приносит удачу.'
//   },
//   {
//     imageUrl: '/images/lecture.jpg',
//     role: 'Профессор',
//     date: '24.04.2024',
//     id: '№1',
//     title: 'Лекция о лекциях',
//     replyUrl: '/education/lecture-on-lectures',
//     text: 'Объявление: следующая лекция будет о том, как не заснуть на лекции. Приносите кофе!'
//   }
// ]


const EducationPage = () => {
  const educationThreads = useSelector(selectStudyThreads)
  return (
    <section className="grid md:grid-cols-2 gap-y-1.5 gap-x-1.5">
      {educationThreads.map((element, index) =>
        <ThreadGlobal text={element.text} title={element.title} date={element.date} id={element.id}
                      role={element.role} />
      )
      }
    </section>
  )
}

export default EducationPage
