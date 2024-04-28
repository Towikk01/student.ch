import React from 'react'
import CustomSection from '@/components/custom-section/CustomSection'
import Link from 'next/link'

const PersonalAccountPage = () => {
  return (
    <CustomSection direction="col" center="items-center justify-center">
      <h4 className="text-primary md:text-4xl text-base">Ваші данні</h4>
      <div
        className="flex bg-black-pearl bg-opacity-30 border border-orange flex-col relative w-full h-fit px-1.5 md:px-3.5 py-2 items-center rounded-xl gap-2">
        <div className="flex flex-col sm:flex-row justify-evenly w-full gap-1">
          <div className="flex flex-col gap-1.5 items-center">
            <h6 className="text-peach text-sm">Ваше імʼя та прізвище</h6>
            <span className="text-primary text-base">Кек Шрекович</span>
          </div>
          <div className="flex flex-col  gap-1.5 items-center">
            <h6 className="text-peach text-sm">Ваш нікнейм</h6>
            <span className="text-primary text-base">kekshrek</span>
            <button
              className="text-primary text-[12px] hover:text-peach bg-black-pearl rounded-xl border-orange border px-1 py-1 transition-all duration-200  font-bold sm:absolute right-2 top-2">Змінити
              нікнейм
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h6 className="text-peach text-sm text-center">Ваші вподобайки</h6>
          <div className="flex flex-col sm:grid grid-cols-2 w-full md:grid-cols-4 items-center sm:items-stretch gap-1">
            <Link href="/">Назва треду</Link>
            <Link href="/">Назва треду</Link>
            <Link href="/">Назва треду</Link>
            <Link href="/">Назва треду</Link>
          </div>

        </div>
      </div>
    </CustomSection>
  )
}

export default PersonalAccountPage
