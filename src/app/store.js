import {configureStore} from '@reduxjs/toolkit';
import postListReducer from '../Features/PostList/PostListSlice';

export default configureStore({
    reducer: {
        postList: postListReducer
    }
})