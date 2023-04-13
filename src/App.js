import React from 'react';
import {Spotify} from './components/Spotify'
import {Card} from './components/Card'
import './App.css';

function App() {
  return (
    
    <div className="webapp">
      <div className = "Welcome Title">
        <h1>Welcome username</h1>
      </div>
      <div className="todo-container">
        <Card />
      </div>

      <div className="other-container">
        <div className='spotify-container'>
          <Spotify />
        </div>
        <div className='weather-container'>
          <h1>WEATHER APP</h1>
        </div>
      </div>
    </div>
  );
}


export default App;
