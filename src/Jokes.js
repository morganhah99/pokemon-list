import React from 'react';
import './Jokes.css';

function Jokes({ joke }) {
  return (
    <div className='jokeContainer'>
        <div className='jokesBox'>
            <div key={joke}>{joke}</div>
        </div>
    <div className='jokeButton'>
        <button onClick="">another one</button>
        </div>
    </div>
  )
}

export default Jokes