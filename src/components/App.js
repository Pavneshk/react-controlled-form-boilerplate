import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState();
  const [commentError, setCommentError] = useState();

    const handleRatingChange = (e) => {
    setRating(e.target.value);
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    if (e.target.value.length > 5) {
      setCommentError('');
    } else {
      setCommentError('Comment must be at least 5 characters');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div id="main">
      <form>
        <div>
          <label htmlFor='rating'>Rating: </label>
          <input 
            type="range"
            min="1"
            max="10"
            id="rating"
          />
          <span className='rating'>rating</span>
        </div>
        <div>
          <label htmlFor='comment'>Comment: </label>
          <textarea 
            id='comment'
          />
          <p style={{ color: 'red' }} className="comment-error">Comment must be atleast 5 characters.</p>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default App;
