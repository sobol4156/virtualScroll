import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SelectedPost {
  id: number;
  title: string;
  body: string;
}

interface SelectedPostState {
  value: SelectedPost | null;
}

const initialState: SelectedPostState = {
  value: null,
};



export const selectedPostSlice = createSlice({
  name: 'selectedPost',
  initialState,
  reducers: {
    setSelectedPost: (state, action: PayloadAction<SelectedPost>) => {
        state.value = action.payload;
    },
  },
});

export const { setSelectedPost } = selectedPostSlice.actions;

export const selectSelectedPost = (state: { selectedPost: SelectedPostState }) => state.selectedPost.value;

export default selectedPostSlice.reducer;