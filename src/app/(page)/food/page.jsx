'use client'
import React from 'react'
import ThreadGlobal from '@/components/threads/ThreadGlobal'
import { useSelector } from 'react-redux'
import { selectFoodThreads } from '@/lib/slices/food-threads/foodThreadsSlice'


const FoodPage = () => {
  const foodThreads = useSelector(selectFoodThreads)
  return (
    <section className="grid md:grid-cols-2 gap-y-1.5 gap-x-1.5">
      {foodThreads.map((element, index) =>
        <ThreadGlobal text={element.text} title={element.title} date={element.date} id={element.id}
                      role={element.role} />
      )
      }
    </section>
  )
}

export default FoodPage
