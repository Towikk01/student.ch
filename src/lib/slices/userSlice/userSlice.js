import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: {
			name: '',
			nickname: '',
			surname: '',
			likes: [],
		},
		isLoggedIn: false,
	},
	reducers: {
		logIn(state, action) {
			state.isLoggedIn = true;
			state.user = {...state.user, ...action.payload};
		},
		logOut(state) {
			state.isLoggedIn = false;
			state.user = {name: '', surname: '', nickname: ''};
		},
		changeNickname(state, action) {
			state.user.nickname = action.payload.nickname;
		},
		toggleFav(state, action) {
			const threadId = action.payload;
			const isLiked = state.user.likes.includes(threadId);
			if (!isLiked) {
				state.user.likes.push(threadId);
			} else {
				state.user.likes = state.user.likes.filter(id => id !== threadId);
			}
		},
	},
});
export const {logIn, logOut, changeNickname, toggleFav} = userSlice.actions;
export const user = state => state.user.user;
export const userLikes = state => state.user.user.likes;
export const isLoggedIn = state => state.user.isLoggedIn;
export default userSlice.reducer;
