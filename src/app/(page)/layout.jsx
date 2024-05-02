'use client'
import React from 'react'
import CustomSection from '@/components/custom-section/CustomSection'
import { usePathname } from 'next/navigation'
import CreateThreadButton from '@/components/button/CreateThreadButton'

const ThreadsLayout = ({ children }) => {
  const pathname = usePathname()
  console.log(pathname)
  const titlePath = pathname === '/education' ? 'навчання' : pathname === '/food' ? 'їдальні' : 'гуртожитка'
  const category = pathname === '/education' ? 'study' : pathname === '/food' ? 'food' : 'dorm'


  return (
    <CustomSection direction="col" center="items-center">
      <h3 className="text-primary text-[18px] md:text-4xl">Дошка {titlePath}</h3>
      <CreateThreadButton category={category} />
      {children}
    </CustomSection>
  )
}

export default ThreadsLayout
