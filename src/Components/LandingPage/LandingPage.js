import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [park, setPark] = useState('');

  const handleInputChange = (event) => {
    setPark(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('User searched for:', park);
  }

  return (
      <div className="container">
        <div className='box'>
          <h1>Search for a park to see weather forecasts</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={park} onChange={handleInputChange} />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
  );
}

export default LandingPage;
