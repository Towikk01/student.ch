import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from '@/lib/slices/userSlice/userSlice'
import { latestThreadsSlice } from '@/lib/slices/latest-threads/latestThreadsSlice'
import { foodThreadsSlice } from '@/lib/slices/food-threads/foodThreadsSlice'
import { dormThreadsSlice } from '@/lib/slices/dorm-threads/dormThreadsSlice'
import { studyThreadsSlice } from '@/lib/slices/study-threads/studyThreadsSlice'


export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    latestThreads: latestThreadsSlice.reducer,
    foodThreads: foodThreadsSlice.reducer,
    dormThreads: dormThreadsSlice.reducer,
    studyThreads: studyThreadsSlice.reducer
  }
})