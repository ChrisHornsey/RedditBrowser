import React from 'react'

export default function Post({post}) {
    const {title, body, id, image }= post;

    return (
        <div key={id} className="Post">
            <h2>{title}</h2>
            {image? <img src = {image}/> : ""}
            <span>{body}</span>
        </div>
    );

}