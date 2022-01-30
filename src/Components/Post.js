import React from 'react'
import logo from '../media/reddit-logo.png'


export default function Post({post}) {
    const {title, body, image }= post;

    return (
        <div className="Post">
            <h2>{title}</h2>
            <img src = {image ? image : logo}/> 
            <span>{body}</span>
        </div>
    );

}