import React from 'react'
import logo from '../media/reddit-logo.png'


export default function Post({post}) {
    const {title, body, image }= post;

    return (
        <div className="Post">
            <h2>{title}</h2>
            
            <div className='post_body'>
                {image ? <img className='thumbnail' src = {image}/> : ""}
                {body ? <p>{body}</p> : ""}
                </div>
        </div>
    );

}