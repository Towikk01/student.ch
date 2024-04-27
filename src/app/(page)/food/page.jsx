import React from 'react'
import ThreadGlobal from '@/components/threads/ThreadGlobal'

const foodThreads = [
  {
    imageUrl: '/images/pancakes.jpg',
    role: 'Гурман',
    date: '24.04.2024',
    id: '№1',
    title: 'Панкейк или блин?',
    replyUrl: '/food/pancake-or-crepe',
    text: 'Друзья, у меня для вас вопрос на миллион: что лучше на завтрак – американские панкейки или русские блинчики?'
  },
  {
    imageUrl: '/images/soup.jpg',
    role: 'Студент',
    date: '24.04.2024',
    id: '№2',
    title: 'Супчик бесплатно!',
    replyUrl: '/food/free-soup',
    text: 'Объявление: у кого пустой холодильник, бежим в столовую. Сегодня раздают суп на халяву!'
  },
  {
    imageUrl: '/images/burger.jpg',
    role: 'Критик',
    date: '24.04.2024',
    id: '№3',
    title: 'Бургерная инвазия',
    replyUrl: '/food/burger-invasion',
    text: 'Сегодня видел как в столовую зашёл гамбургер... И заказал себе цезарь! Это как так-то?'
  },
  {
    imageUrl: '/images/fruit.jpg',
    role: 'Веган',
    date: '24.04.2024',
    id: '№4',
    title: 'Фруктовый спор',
    replyUrl: '/food/fruit-debate',
    text: 'Ребят, давайте решим раз и навсегда: томат – это фрукт или овощ?'
  },
  {
    imageUrl: '/images/coffee.jpg',
    role: 'Кофеман',
    date: '24.04.2024',
    id: '№5',
    title: 'Кофейное безумие',
    replyUrl: '/food/coffee-madness',
    text: 'Подслушал баристу: если произнести "Эспрессио" трижды перед зеркалом, в кафе появится идеальная кофемашина.'
  }
]


const FoodPage = () => {
  return (
    <section className="grid grid-cols-2 gap-y-1.5 gap-x-1.5">
      {foodThreads.map((element, index) =>
        <ThreadGlobal text={element.text} title={element.title} date={element.date} id={element.id}
                      role={element.role} />
      )
      }
    </section>
  )
}

export default FoodPage
