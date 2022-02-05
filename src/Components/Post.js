import React from 'react'


export default function Post({post}) {
    const {title, body, image }= post;

    return (
        <div className="Post">
            <h2>{title}</h2>
            
            <div className='post_body'>
                {image ? <img className='thumbnail' src = {image} alt = {title}/> : ""}
                {body ? <p>{body}</p> : ""}
                </div>
        </div>
    );

}