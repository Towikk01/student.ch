import { createSlice } from '@reduxjs/toolkit'
import { Books, Dormitory, Food, Teacher } from '../../../../public/index'

export const foodThreadsSlice = createSlice({
  name: 'foodThreads',
  initialState: {
    foodThreads: [
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
    ],
    isLoading: false,
    error: null
  },
  reducers: {
    fetchFoodThreads: state => {
      state.isLoading = true
    },
    fetchFoodThreadsSuccess: (state, action) => {
      state.foodThreads = [...state.foodThreads, ...action.payload]
      state.isLoading = false
    },
    fetchFoodThreadsError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    addFoodThread: (state, action) => {
      state.foodThreads = [...state.foodThreads, action.payload]
    }
  }
})

export const {
  fetchFoodThreads,
  fetchFoodThreadsSuccess,
  fetchFoodThreadsError,
  addFoodThread
} = foodThreadsSlice.actions

export const selectFoodThreads = state => state.foodThreads.foodThreads
export const selectIsLoading = state => state.foodThreads.isLoading
export const selectError = state => state.foodThreads.error

export default foodThreadsSlice.reducer
