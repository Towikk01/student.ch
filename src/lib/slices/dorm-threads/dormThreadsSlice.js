import { createSlice } from '@reduxjs/toolkit'
import { Books, Dormitory, Food, Teacher } from '../../../../public/index'

export const dormThreadsSlice = createSlice({
  name: 'dormThreads',
  initialState: {
    dormThreads: [
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
    ],
    isLoading: false,
    error: null
  },
  reducers: {
    fetchDormThreads: state => {
      state.isLoading = true
    },
    fetchDormThreadsSuccess: (state, action) => {
      state.dormThreads = [...state.dormThreads, ...action.payload]
      state.isLoading = false
    },
    fetchDormThreadsError: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    addDormThread: (state, action) => {
      state.dormThreads = [...state.dormThreads, action.payload]
    }
  }
})

export const {
  fetchDormThreads,
  fetchDormThreadsSuccess,
  fetchDormThreadsError,
  addDormThread
} = dormThreadsSlice.actions

export const selectDormThreads = state => state.dormThreads.dormThreads
export const selectIsLoading = state => state.dormThreads.isLoading
export const selectError = state => state.dormThreads.error

export default dormThreadsSlice.reducer
