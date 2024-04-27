import React from 'react'
import CustomSection from '@/components/custom-section/CustomSection'
import ThreadGlobal from '@/components/threads/ThreadGlobal'
import ThreadReply from '@/components/threads/ThreadReply'

const fakeReplies = [
  {}
]
const ThreadPage = ({ id }) => {
  return (
    <CustomSection direction="col" center="items-start ">
      <div className="grid grid-cols-1 gap-y-1.5">
        <ThreadGlobal
          // text={id.text} title={id.title} id={id.id} date={id.date} imageUrl={id.image}
          //             nickname={id.nickname}
        />

        {
          fakeReplies.map((element, index) =>
            <ThreadReply text={element.text} title={element.title} id={element.id} date={element.date}
                         nickname={element.nickname} />
          )
        }
      </div>
    </CustomSection>
  )
}

export default ThreadPage
