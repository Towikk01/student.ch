import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isLoggedIn: false
  },
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload
    },
    logOut: (state) => {
      state.isLoggedIn = false
      state.user = null
    }
  }
})
export const { logIn, logOut } = userSlice.actions
export const user = state => state.user.user
export const isLoggedIn = state => state.user.isLoggedIn
export default userSlice.reducer
