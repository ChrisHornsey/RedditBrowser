import React from 'react'

export default function Post({post}) {
    const {title, body, id} = post;

    return (
        <li key={id} className="Post">
            <span>{body}</span>
        </li>
    );

}