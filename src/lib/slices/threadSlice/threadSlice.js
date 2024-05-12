// It should contain the slice for the thread id to save it after clicking on the thread
//
import {createSlice} from '@reduxjs/toolkit';

export const threadSlice = createSlice({
	name: 'thread',
	initialState: {
		id: localStorage.getItem('threadId') || null,
		hiddenThreads: [],
		isInThread: false,
	},
	reducers: {
		saveThreadId(state, action) {
			state.id = action.payload;
		},
		resetThreadId(state) {
			state.id = null;
		},
		hideThread(state, action) {
			const threadId = action.payload;
			if (!state.hiddenThreads.includes(threadId)) {
				state.hiddenThreads.push(threadId);
			}
		},
		changeIsInThread(state) {
			state.isInThread = !state.isInThread;
		},
	},
});

export const {
	saveThreadId,
	resetThreadId,
	hideThread,
	changeIsInThread,
} = threadSlice.actions;

export const selectThreadId = state => state.thread.id;
export const selectIsInThread = state => state.thread.isInThread;
export const selectHiddenThreads = state => state.thread.hiddenThreads;

export default threadSlice.reducer;

