import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFav, userLikes } from '@/lib/slices/userSlice/userSlice'

const AddToFav = ({ threadId }) => {
  const dispatch = useDispatch()
  const likedThreads = useSelector(userLikes)
  const isLiked = likedThreads.includes(threadId)
  const handleToggleFav = () => {
    dispatch(toggleFav(threadId))
  }

  console.log(likedThreads, isLiked, threadId)

  return (
    <button onClick={handleToggleFav}
            className={`absolute bottom-2 right-2 w-3 h-3 ${isLiked ? 'text-peach' : 'text-orange'}
`}>
      <CiHeart />
    </button>
  )
}

export default AddToFav
