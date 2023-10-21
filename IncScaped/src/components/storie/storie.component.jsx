import React from 'react'
import './storie.styles.scss'
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';
import { RatingContext } from '../../context/rating.context';
import { Link } from 'react-router-dom';

export default function StorieComponent({storie}) {
    const { allUsers} = useContext(UserContext);    
    const {rating} = useContext(RatingContext)    
    const user = allUsers.find(user => user.id === storie.user_id);
    const rait = rating.find(rait => rait.id === storie.user_id)
    return (
        <Link className='storie-body-container' to={`/story/${storie.id}`}>
            <div className="storie-details">
                <p>{storie.creation_date} Author: {user.username}</p>
                <p>Rating: {rait.rating}</p>
                <p>Title: {storie.title}</p>
                <p>Fragment: {storie.fragment}</p>                
            </div>
        </Link>
    )
  }
