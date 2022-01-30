import {createSlice} from '@reduxjs/toolkit';
import { fakeData } from '../../Components/fakeData';

export const postListSlice = createSlice({
    name: 'postList',
    initialState: {
        posts: fakeData
    }
})

export const selectAllPosts = (state) => state.postList.posts;

export default postListSlice.reducer;