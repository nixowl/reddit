import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postsSlice'
import sortingReducer from './sortingSlice'
import subredditReducer from './subredditSlice'
import postPageReducer from './postPageSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        sorting: sortingReducer,
        subreddit: subredditReducer, 
        postPage: postPageReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
