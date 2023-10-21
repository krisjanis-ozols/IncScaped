import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';


export default function ComentComponent({coment}) {
  const {allUsers} = useContext(UserContext);
  const author = allUsers.find(user => user.id === coment.user_id);
  return (
    <>
    <div>
      <p>{author.username} {coment.creation_date}</p>    
      <h3>{coment.coment_text}</h3>
    </div>
    </>    
  )
}
