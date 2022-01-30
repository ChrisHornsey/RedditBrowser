import React, {useEffect} from "react";
import Post from "../../Components/Post";
import { selectAllPosts, LoadAllPosts } from "./PostListSlice";
import { useSelector, useDispatch } from "react-redux";

export default function PostList () {

    const allPosts = useSelector(selectAllPosts)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoadAllPosts());
        }, [dispatch])


    return (
        <div className = "PostList">
            {allPosts.map(post => <Post key = {post.id} post={post}/>)}
        </div>
    )
}