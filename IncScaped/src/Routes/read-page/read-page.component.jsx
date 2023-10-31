import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { StorieContext } from '../../context/storie.context';
import { UserContext } from '../../context/user.context';
import { RatingContext } from '../../context/rating.context';
import { ComentContext } from '../../context/coment.context';
import ComentListComponent from '../../components/coment-list/coment-list.component';
import CommentForm from '../../components/comment-form/comment-form.component';
import './read-page.styles.scss'

export default function ReadPageComponent() {
  const {stories} = useContext(StorieContext);
  const {allUsers} = useContext(UserContext);
  const {rating} = useContext(RatingContext);
  const {coments} = useContext(ComentContext);
  const { id } = useParams();
  const storie = stories.find(storie => storie.id === id);
  const author = allUsers.find(user => user.id === storie.user_id);
  const ratingValue = rating.find(rating => rating.storie_id === id);
  const comments = coments.filter(coment => coment.storie_id === id);

  return (

    <div className="storie-container">
      <div>
        <CommentForm/>
      </div>

      <div className="storie-content">
        <p>{author.username} {storie.story_date}</p>
        <p>Rating: {ratingValue.rating}</p>
        <h1>{storie.title}</h1>
        <div>{storie.content}</div> 
      </div>
      {comments&&(<ComentListComponent comments={comments}/>)}
    </div>
  )
}
