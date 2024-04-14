import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts',
    async (sortingOption: string) => {
        const response = await axios.get(`https://www.reddit.com/${sortingOption}.json`)
        return response.data.data.children // TODO - add type
    }
)

type PostsState = {
    posts: Array<any>; // TODO - add type
    isLoading: boolean;
    error: string | null;
}

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    error: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
            state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "Failed to fetch posts";
            })
    }
})

export default postsSlice.reducer;