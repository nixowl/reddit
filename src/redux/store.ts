import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postsSlice'
import sortingReducer from './sortingSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        sorting: sortingReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
