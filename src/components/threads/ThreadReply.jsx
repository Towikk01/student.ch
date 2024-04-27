import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ThreadReply = ({
                       nickname = 'Анонім',
                       date = '14.88.2024',
                       id = '№0',
                       replyUrl = '/0',
                       text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`
                     }) => {
  return (
    <article
      className="w-fit max-w-[500px] h-fit max-h-[250px] bg-black-pearl p-2  gap-3 flex flex-row rounded-xl shadow-md">
      {/*Text block */}
      <div className="w-fit flex flex-col">
        <div className="post-actions flex flex-row justify-between gap-1.5 items-center">
          <div className="flex flex-row gap-1.5 items-center ">
            <button
              className="text-[10px] text-primary  text-white font-bold rounded after:content-[''] relative after:rounded-[16px] transition-all after:duration-300 after:absolute after:w-0 after:h-[1px] hover:after:w-full after:bg-primary after:bottom-0 after:left-0">
              Відповісти
            </button>
            <button
              className="text-[10px]  text-primary font-bold rounded after:content-[''] relative after:rounded-[16px] transition-all after:duration-300 after:absolute after:w-0 after:h-[1px] hover:after:w-full after:bg-primary after:bottom-0 after:left-0">
              Сховати
            </button>
          </div>
          <div className="flex flex-row gap-1 items-center justify-end">
            <p className="text-[10px] text-primary">{nickname}</p>
            <p className="text-[10px] text-primary">{date}</p>
            <span className="text-[10px] text-primary">{id}</span>
          </div>
        </div>
        <div>
          <p className="text-[14px] text-ellipsis text-primary">
            {text}
          </p>
        </div>
      </div>
    </article>
  )
}

export default ThreadReply
