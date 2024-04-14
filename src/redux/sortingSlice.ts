import { createSlice } from '@reduxjs/toolkit';

const sortingSlice = createSlice({
    name: 'sorting',
    initialState: {
        sortingOption: 'hot'
    },
    reducers: {
        setSortingOption(state, action) {
            state.sortingOption = action.payload;
        }
    }
})

export const { setSortingOption } = sortingSlice.actions;
export default sortingSlice.reducer;