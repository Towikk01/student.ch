'use client'
import React, { useState } from 'react'
import CustomSection from '@/components/custom-section/CustomSection'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { user, userLikes, changeNickname } from '@/lib/slices/userSlice/userSlice'

const PersonalAccountPage = () => {
  const userData = useSelector(user)
  const userLikesData = useSelector(userLikes)
  const [nickname, setNickname] = useState(userData.nickname)
  const [editMode, setEditMode] = useState(false)
  const dispatch = useDispatch()

  const handleEditToggle = () => {
    setEditMode(!editMode)
  }

  const handleChangeNickname = () => {
    if (nickname !== userData.nickname) {
      dispatch(changeNickname({ nickname }))
    }
    setEditMode(false)
  }

  const handleNicknameChange = (e) => {
    setNickname(e.target.value)
  }

  const handleOutsideClick = (e) => {
    // If clicked outside the input field and edit mode is true, cancel edits
    if (editMode && !e.target.closest('.edit-container')) {
      setEditMode(false)
    }
  }

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
          <div className="flex flex-col gap-1.5 items-center">
            <h6 className="text-peach text-sm">Ваш нікнейм</h6>
            {editMode ? (
              <div className="flex flex-col gap-2 items-center">
                <input
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                  className="text-black-pearl rounded-[12px] border border-peach outline-0 px-1 py-0.5 text-base"
                  autoFocus
                />
                <button
                  onClick={handleChangeNickname}
                  className="text-primary text-[12px] hover:text-peach bg-black-pearl rounded-xl border-orange border px-1 py-1 transition-all duration-200 font-bold sm:absolute right-2 top-2">
                  Зберегти
                </button>
              </div>
            ) : (
              <div onClick={handleEditToggle} className="flex flex-col gap-2 items-center">
                <span className="text-primary text-base">{userData.nickname}</span>
                <button
                  className="text-primary text-[12px] hover:text-peach bg-black-pearl rounded-xl border-orange border px-1 py-1 transition-all duration-200 font-bold sm:absolute right-2 top-2">
                  Редагувати
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h6 className="text-peach text-sm text-center">Ваші вподобайки</h6>
          <div className="flex flex-col sm:flex-row w-full justify-evenly items-center  gap-3">
            {userLikesData.map((like, index) => (
              <Link href={`/${like}`} key={index} className="bg-peach/80 px-1.5 py-1.5 rounded-sm">{like}</Link>
            ))}
          </div>
        </div>
      </div>
    </CustomSection>
  )
}

export default PersonalAccountPage