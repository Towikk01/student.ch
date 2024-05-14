import React from 'react'
import { useSelector } from 'react-redux'
import { isLoggedIn } from '@/lib/slices/userSlice/userSlice'


const ThreadReply = ({
                       username,
                       date,
                       id,
                       imageData,
                       text
                     }) => {


  const loggedIn = useSelector(isLoggedIn)
  const fakeReplies = ['11', '12', '13', '1488', '1337']

  return (
    <article
      className="w-fit max-w-[500px] border-peach border h-fit max-h-[250px] bg-black-pearl p-2  gap-3 flex flex-row rounded-xl shadow-md">
      {imageData &&
        <div className="w-max h-max">
          <img src={`data:image/png;base64,${imageData}`} alt="Post image"
               className="rounded-md max-w-[150px] max-h-[150px] object-cover aspect-square" />
        </div>

      }
      {/*Text block */}
      <div className="w-fit flex flex-col">
        <div className="post-actions flex flex-row justify-between gap-1.5 items-center">
          <div className="flex flex-row gap-1.5 items-center ">
            {loggedIn &&
              <button
                className="text-[10px] text-primary  text-white font-bold rounded after:content-[''] relative after:rounded-[16px] transition-all after:duration-300 after:absolute after:w-0 after:h-[1px] hover:after:w-full after:bg-primary after:bottom-0 after:left-0">
                Відповісти
              </button>}
            {loggedIn &&
              <button
                className="text-[10px]  text-primary font-bold rounded after:content-[''] relative after:rounded-[16px] transition-all after:duration-300 after:absolute after:w-0 after:h-[1px] hover:after:w-full after:bg-primary after:bottom-0 after:left-0">
                Сховати
              </button>
            }
          </div>
          <div className="flex flex-row gap-1 items-center justify-end">
            <p className="text-[10px] text-primary">{username}</p>
            <p className="text-[10px] text-primary">{date}</p>
            <span className="text-[10px] text-primary">{id}</span>
          </div>
        </div>
        <div>
          <p className="text-[14px] text-ellipsis text-primary">
            {text}
          </p>
        </div>
        {/*<div className="flex gap-1 items-center justify-start">*/}
        {/*  {fakeReplies.map((reply, index) => (*/}
        {/*    <p className="text-[10px] text-primary">123</p>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </article>
  )
}

export default ThreadReply
