import React from "react";
import Post from "../../Components/Post";
import PostListSlice, { selectAllPosts } from "./PostListSlice";
import { useSelector } from "react-redux";

export default function PostList () {

    const allPosts = useSelector(selectAllPosts)

    return (
        <div className = "PostList">
            {allPosts.map(post => <Post post={post}/>)}
        </div>
    )
}