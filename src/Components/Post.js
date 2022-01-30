import React from 'react'

export default function Post({post}) {
    const {title, body, id} = post;

    return (
        <div key={id} className="Post">
            <h2>{title}</h2>
            <span>{body}</span>
        </div>
    );

}