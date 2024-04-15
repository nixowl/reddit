import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SubredditState {
    currentSubreddit: string
}

const initialState: SubredditState = {
    currentSubreddit: '',
}

export const subredditSlice = createSlice({
    name: 'subreddit',
    initialState,
    reducers: {
        setCurrentSubreddit: (state, action: PayloadAction<string>) => {
            state.currentSubreddit = action.payload
        },
    },
})

export const { setCurrentSubreddit } = subredditSlice.actions

export default subredditSlice.reducer
