import React from 'react'
import { useState} from 'react'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';
import axiosClient from '../../axios';
import './comment-form.styles.scss'
import StarRating from '../star-rating/star-rating.component';

const defaultFormFields = {
    
    commentText:'',
}


export default function CommentForm() {
    const [rating, setRating] = useState(1);
    const {setUserToken,setCurrentUser} = useContext(UserContext);
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {commentText} = formFields;
    const handleRatingChange = (newRating) => {
        setRating(newRating);
      };
    
    const handleSubmit = async (event) =>{
        event.preventDefault(); 
        //userId //StiriesId //Commetn text, Rating
        //comment
        console.log(formFields);
        console.log(rating);
        axiosClient.post('/comment', formFields)
        //
        .then(({data})=>{
            //jāpievieno datu nodošana
        })
        .catch((error)=>{
            console.log(error);
        });        
    }
    const handleChanges = (event) =>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})        
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
          e.preventDefault(); // Prevent the default tab behavior
          const input = e.target;
          const selectionStart = input.selectionStart;
          const selectionEnd = input.selectionEnd;
          const value = input.value;
          const newValue =
            value.substring(0, selectionStart) +
            '\t' + value.substring(selectionEnd);
          input.value = newValue;
          input.selectionStart = input.selectionEnd = selectionStart + 1;
        };
     }
  return (
    <div className='comment-form-container'>
        <h2>Rate and comment</h2>
        <span>Select a rating and write a short review</span>
        <form onSubmit={handleSubmit} className='form'>
            <StarRating rating={rating} onRatingChange={handleRatingChange}/>
            <textarea
            className='Comment'
            id="Comment"
            name="commentText"
            value={commentText}
            onChange={handleChanges}
            onKeyDown={handleKeyDown}
            required
          />
  
            <div className='buttons-container'>
                <Button type='submit'>Comment</Button>
            </div>            
        </form>
    </div>
  )
}