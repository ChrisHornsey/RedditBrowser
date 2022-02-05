import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { fakeData } from '../../Components/fakeData';
import { postDataTidier } from '../../Helpers';

export const LoadAllPosts = createAsyncThunk(
    'postList/loadAllPosts',
    async () => {
        const data = await fetch('https://www.reddit.com/r/popular.json');
        const json = await data.json();
        return json;
    }
)

export const postListSlice = createSlice({
    name: 'postList',
    initialState: {
        posts: fakeData,
        isLoadingPostData: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
        .addCase(LoadAllPosts.pending, (state) => {
            state.isLoadingPostData = true;
            state.hasError = false;
        })
        .addCase(LoadAllPosts.fulfilled, (state, action) => {
            state.isLoadingPostData = false;
            state.posts = postDataTidier(action.payload);
        })
        .addCase(LoadAllPosts.rejected, (state, action) => {
            state.isLoadingPostData = false;
            state.hasError = true;
            state.posts = fakeData;
        })
    }
})

export const selectAllPosts = (state) => state.postList.posts;

export default postListSlice.reducer;