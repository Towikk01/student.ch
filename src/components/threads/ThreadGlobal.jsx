'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { isLoggedIn } from '@/lib/slices/userSlice/userSlice'
import AddToFav from '@/components/button/AddToFav'

const ThreadGlobal = ({
                        imageUrl,
                        nickname = 'Анонім',
                        date = '14.88.2024',
                        id = '№0',
                        title = 'Title',
                        replyUrl = '/0',
                        text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`
                      }) => {

  const loggedIn = useSelector(isLoggedIn)
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [reply, setReply] = useState({
    text: '',
    image: null
  })
  const handleInputChange = e => {
    const { name, value, files, type } = e.target
    setReply({
      ...reply,
      [name]: type === 'file' ? files[0] : value
    })
  }

  const handleReply = e => {
    e.preventDefault()
    setReply({ text: '', image: null })
    setShowReplyForm(false)
  }

  return (
    <article
      className="w-full md:w-fit relative items-center md:items-start max-w-max border-orange border-[1px] h-fit md:max-h-[250px] bg-black-pearl p-2  gap-3 flex flex-col md:flex-row rounded-xl shadow-md">
      {/*Image block */}
      {loggedIn &&
        <AddToFav threadId={id} />
      }
      {imageUrl &&
        <div className="w-max h-max">
          <Image src={imageUrl} alt="Post Image"
                 className="rounded-md max-w-[150px] max-h-[150px] object-cover aspect-square" />
        </div>
      }
      {/*Text block */}
      <div className="w-fit flex flex-col gap-2">
        <div className="post-actions flex flex-col sm:flex-row justify-between gap-1.5 items-center">
          <div className="flex flex-row gap-1.5 items-center ">
            {loggedIn &&
              <div className="relative flex">
                <button
                  onClick={() => setShowReplyForm(!showReplyForm)}
                  className="text-[10px] text-primary  text-white font-bold rounded after:content-[''] relative after:rounded-[16px] transition-all after:duration-300 after:absolute after:w-0 after:h-[1px] hover:after:w-full after:bg-primary after:bottom-0 after:left-0">
                  Відповісти
                </button>
                {showReplyForm && (
                  <form
                    className="absolute top-[22px]  bg-black-pearl flex flex-col z-30 p-2 border-orange border rounded shadow-lg"
                    onSubmit={handleReply}>
                    <textarea name="text" value={reply.text} onChange={handleInputChange} placeholder="Ваш коментар..."
                              className="text-[10px] text-black-pearl p-1 rounded border border-peach w-48" />
                    <input type="file" name="image" onChange={handleInputChange} className="text-[10px] my-1" />
                    <button type="submit"
                            className="bg-black-pearl/80 border border-orange hover:bg-blue-700 text-white text-[10px] font-bold py-1 px-2 rounded">
                      Відповісти
                    </button>
                  </form>
                )}
              </div>
            }
            <button
              className="text-[10px]  text-primary font-bold rounded after:content-[''] relative after:rounded-[16px] transition-all after:duration-300 after:absolute after:w-0 after:h-[1px] hover:after:w-full after:bg-primary after:bottom-0 after:left-0">
              Сховати
            </button>
            <Link href={replyUrl}
                  className=" whitespace-pre text-[10px] text-primary font-bold rounded after:content-[''] relative after:rounded-[16px] transition-all after:duration-300 after:absolute after:w-0 after:h-[1px] hover:after:w-full after:bg-primary after:bottom-0 after:left-0">
              У тред
            </Link>
          </div>
          <div className="flex flex-row gap-1 items-center justify-end">
            <p className="text-[10px] text-primary">{nickname}</p>
            <p className="text-[10px] text-primary">{date}</p>
            <span className="text-[10px] text-primary">{id}</span>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start gap-1.5">
          {title &&
            <h4 className="text-[18px] text-center md:text-start font-bold text-primary">{title}</h4>
          }
          <p className="text-[14px] text-ellipsis text-primary">
            {text}
          </p>
        </div>
      </div>
    </article>
  )
}

export default ThreadGlobal