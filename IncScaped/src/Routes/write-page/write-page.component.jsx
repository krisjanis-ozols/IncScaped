import React from 'react'
import "./write-page.styles.scss"
import axios from 'axios';
import { useState } from 'react';

import Button from '../../components/button/button.component';
export default function WritePageComponent() {
  const handleTitleChange = (e) => {
    // setTitle(e.target.value);
  };

  const handleStoryTextChange = (e) => {
    // setStoryText(e.target.value);
    
  };
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  const [formData, setFormData] = useState({
    user_id: 1,
    prompt_id: 1,
    title: 'title',
    content: 'content',
    story_date: formattedDate
  });

  const handleStorySubmit = async (e) => {
    e.preventDefault();   
    //TODO
    // axios.post('http://localhost/InkScaped/IncScaped/BackEnd/stories', formData, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((response) => {
    //     console.log('Story created successfully:', response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error creating story:', error);
    //   });
  };

  //tab
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
    <div className="write-page-container">
      <h1>Write Your Story</h1>
      <div className="form-container">      
        <form onSubmit={handleStorySubmit}>
          <input
            className='write-title'
            type="text"
            id="title"
            // value={""}
            onChange={handleTitleChange}
            required
          />
          <textarea
            className='storyText'
            id="storyText"
            // value={""}
            onChange={handleStoryTextChange}
            onKeyDown={handleKeyDown}
            required
          />
          <Button type='submit'>Submit Story</Button>
        </form>
      </div>
    </div>
  )
}
