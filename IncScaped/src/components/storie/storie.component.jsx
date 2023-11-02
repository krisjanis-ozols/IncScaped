import React from 'react'
import './storie.styles.scss'
import { Link } from 'react-router-dom';

export default function StorieComponent({storie}) {
    const fragment = storie.content.substring(0, 100);
    return (
        <Link className='storie-body-container' to={`/story/${storie.id}`}>
            <div className="storie-details">
                <p>{storie.created_at} Author: {storie.author}</p>
                <p>Rating: {storie.rating}</p>
                <p>Title: {storie.title}</p>
                <p>Fragment: {fragment}</p>                
            </div>
        </Link>
    )
  }
