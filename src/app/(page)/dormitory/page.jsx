import React from 'react'
import ThreadGlobal from '@/components/threads/ThreadGlobal'

const dormitoryThreads = [
  {
    imageUrl: '/images/room.jpg',
    role: 'Сосед',
    date: '24.04.2024',
    id: '№1',
    title: 'Кто украл мои носки?',
    replyUrl: '/dormitory/socks-thief',
    text: 'Нужен детектив: мои носки исчезают каждую ночь. У кого есть подозрения?'
  },
  {
    imageUrl: '/images/cleaning.jpg',
    role: 'Уборщик',
    date: '24.04.2024',
    id: '№2',
    title: 'Уборка по расписанию',
    replyUrl: '/dormitory/cleaning-schedule',
    text: 'Объявление: расписание уборки теперь висит на холодильнике. И да, я знаю кто ты, "Мистер Я-завтра-вымою-посуду".'
  },
  {
    imageUrl: '/images/laundry.jpg',
    role: 'Пострадавший',
    date: '24.04.2024',
    id: '№3',
    title: 'Стиральная машина зажевала',
    replyUrl: '/dormitory/washer-eats-clothes',
    text: 'Внимание! Стиралка на третьем этаже опять в режиме "голод". Не оставляйте одежду без присмотра!'
  },
  {
    imageUrl: '/images/party.jpg',
    role: 'Тусовщик',
    date: '24.04.2024',
    id: '№4',
    title: 'Вечеринка в номере 404',
    replyUrl: '/dormitory/party-in-404',
    text: 'Шумные новости: если ты не нашел вечеринку в номере 404, это не ошибка. Ты просто не приглашен. Спасибо.'
  },
  {
    imageUrl: '/images/night.jpg',
    role: 'Ночной бдитель',
    date: '24.04.2024',
    id: '№5',
    title: 'Тихие часы?',
    replyUrl: '/dormitory/quiet-hours',
    text: 'Кому-нибудь еще кажется, что "тихие часы" - это миф? Последние три ночи слышу, как кто-то играет в пинг-понг...'
  }
]


const DormitoryPage = () => {
  return (
    <section className="grid grid-cols-2 gap-y-1.5 gap-x-1.5">
      {dormitoryThreads.map((element, index) =>
        <ThreadGlobal text={element.text} title={element.title} date={element.date} id={element.id}
                      role={element.role} />
      )
      }
    </section>
  )
}

export default DormitoryPage
