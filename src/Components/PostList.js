import React from "react";
import Post from "./Post";

export default function PostList ({posts}) {
    if (!posts) {
        return null
    }

    return (
        <ul className = "PostList">
            {posts.map(post => <Post post={post}/>)}
        </ul>
    )
}