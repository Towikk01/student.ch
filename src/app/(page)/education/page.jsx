'use client'
import React, { useEffect, useState } from 'react'
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

  const [fetchedData, setFetchedData] = useState()
  const [isLoading, setIsLoading] = useState(false) // Track loading state
  const [error, setError] = useState(null) // Track potential errors
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true) // Set loading state to true
      setError(null) // Clear any previous errors

      try {
        const response = await fetch('http://localhost:8080/thread/all/1', {
          method: 'GET',
            headers: {
              Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : ''
            }
          })

        if (!response.ok) {
          console.log("Помилка при завантаженні даних " + response.statusText)
          setError(response.statusText) // Set error message
        } else {
          const data = await response.json()
          setFetchedData(data)
          console.log("Дані успішно завантажені")
        }
      } catch (error) {
        console.error("Error fetching data:", error)
        setError("Error fetching threads") // Set generic error message
      } finally {
        setIsLoading(false) // Set loading state to false regardless of success or failure
      }
    }

    fetchData()
  }, [])

  const educationThreads = fetchedData || []

  return (
    <section className="grid md:grid-cols-2 gap-y-1.5 gap-x-1.5">
      {isLoading ? (
        <p>Loading threads...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
       educationThreads.length > 0 && educationThreads.map((element, index) => (
          <ThreadGlobal
            text={element.text}
            title={element.title}
            date={element.date}
            id={element.id}
            username={element.author.username}
            imageData={element.imageData}
          />
        ))
      )}
    </section>
  )
}

export default EducationPage
