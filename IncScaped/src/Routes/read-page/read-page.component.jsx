import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { StorieContext } from '../../context/storie.context';
import ComentListComponent from '../../components/coment-list/coment-list.component';
import CommentForm from '../../components/comment-form/comment-form.component';
import './read-page.styles.scss'
import { useEffect } from 'react';
import axiosClient from '../../axios';
import { useState } from 'react';

export default function ReadPageComponent() {
  const [storie, setStorie] = useState({})
  const [comments, setComments] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storyResponse = await axiosClient.get(`/story/${id}`);
        setStorie(storyResponse.data.data);
        const commentsResponse = await axiosClient.get(`comments/${id}`);
        setComments(commentsResponse.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);
  if (isLoading) {
      return <></>; // Render a loading message
  }
  return (

    <div className="storie-container">
      <div>
        <CommentForm/>
      </div>

      <div className="storie-content">
        <p>{storie.author} {storie.created_at}</p>
        <p>Rating: {storie.rating}</p>
        <h1>{storie.title}</h1>
        <div>{storie.content}</div> 
      </div>
      {comments&&(<ComentListComponent comments={comments}/>)}
    </div>
  )
}
