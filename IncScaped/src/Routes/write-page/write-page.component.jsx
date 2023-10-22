import React from 'react'
import "./write-page.styles.scss"
import Button from '../../components/button/button.component';
export default function WritePageComponent() {
  const handleTitleChange = (e) => {
    // setTitle(e.target.value);
  };

  const handleStoryTextChange = (e) => {
    // setStoryText(e.target.value);
    
  };

  const handleStorySubmit = (e) => {
    e.preventDefault();   
  };
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
