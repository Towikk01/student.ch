'use client'
import React, { useEffect, useState } from 'react'
import CustomSection from '@/components/custom-section/CustomSection'
import { useSelector } from 'react-redux'
import { isLoggedIn } from '@/lib/slices/userSlice/userSlice'
import { TableBase } from '@/components/tables/TableBase'


const AdminPanel = () => {
  const loggedIn = useSelector(isLoggedIn)
  const [comments, setComments] = useState([])
  const [threads, setThreads] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/comment/all_comments', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : '',
      },
    }).then(response => {
      if (!response.ok) {
        console.log('Помилка при завантаженні коментарів')
      } else {
        return response.json()
      }
    }).then(data => {
      console.log(data)
      setComments(data)
    }
    ).catch(error => {
      console.error('Error fetching data:', error)
    })
  }
  , [])

  useEffect(() => {
      fetch('http://localhost:8080/thread/all_threads', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('accessToken') ? `Bearer ${localStorage.getItem('accessToken')}` : '',
        },
      }).then(response => {
        if (!response.ok) {
          console.log('Помилка при завантаженні коментарів')
        } else {
          return response.json()
        }
      }).then(data => {
          console.log(data)
          setThreads(data)
        }
      ).catch(error => {
        console.error('Error fetching data:', error)
      })
    }
    , [])

  return (
        <CustomSection direction="col" center="items-center">
          <div
            className="border border-orange rounded-[16px] p-2.5 justify-center items-center flex flex-col gap-2 bg-black-pearl/70">
            <h4 className="text-primary text-3xl gap-10">Панель модератора</h4>
            <TableBase type="threads" data={threads} />
            <TableBase type="comments" data={comments} />
          </div>
        </CustomSection>
  )


}

export default AdminPanel
