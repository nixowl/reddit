import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PostPageState {
  currentPostId: string;
}

const initialState: PostPageState = {
  currentPostId: '',
};

export const postPageSlice = createSlice({
  name: 'postPage',
  initialState,
  reducers: {
    setCurrentPostId: (state, action: PayloadAction<string>) => {
      state.currentPostId = action.payload;
    },
  },
});

export const { setCurrentPostId } = postPageSlice.actions;

export default postPageSlice.reducer;