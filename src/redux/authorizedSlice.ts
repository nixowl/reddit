import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthorizedState {
    isAuthorized: boolean
}

const initialState: AuthorizedState = {
    isAuthorized: false,
}

export const authorizedSlice = createSlice({
    name: 'authorized',
    initialState,
    reducers: {
        setAuthorized: (state, action: PayloadAction<boolean>) => {
            state.isAuthorized = action.payload
        },
    },
})

export const { setAuthorized } = authorizedSlice.actions

export default authorizedSlice.reducer
