'use client'
import React, { useEffect, useState } from 'react'
import ThreadGlobal from '@/components/threads/ThreadGlobal'
import { useSelector } from 'react-redux'
import { selectDormThreads } from '@/lib/slices/dorm-threads/dormThreadsSlice'


const DormitoryPage = () => {
  const [fetchedData, setFetchedData] = useState()
  const [isLoading, setIsLoading] = useState(false) // Track loading state
  const [error, setError] = useState(null) // Track potential errors
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true) // Set loading state to true
      setError(null) // Clear any previous errors

      try {
        const response = await fetch('http://localhost:8080/thread/all/2', {
          method: 'GET'
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

  const dormitoryThreads = fetchedData || []

  return (
    <section className="grid md:grid-cols-2 gap-y-1.5 gap-x-1.5">
      {isLoading ? (
        <p>Loading threads...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        dormitoryThreads.length > 0 &&  dormitoryThreads.map((element, index) => (
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

export default DormitoryPage
