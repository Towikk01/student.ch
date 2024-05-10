// It should contain the slice for the thread id to save it after clicking on the thread
//
import {createSlice} from '@reduxjs/toolkit';

export const threadSlice = createSlice({
	name: 'thread',
	initialState: {
		id: localStorage.getItem('threadId') || null,
	},
	reducers: {
		saveThreadId(state, action) {
			state.id = action.payload;
		},
		resetThreadId(state) {
			state.id = null;
		},
	},
});

export const {
	saveThreadId,
	resetThreadId,
} = threadSlice.actions;

export const selectThreadId = state => state.thread.id;

export default threadSlice.reducer;

