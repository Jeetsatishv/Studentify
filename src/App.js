import React from 'react';
import {Spotify} from './components/Spotify'
import {Card} from './components/Card'
import {Weather} from './components/Weather'
import './App.css';

function App() {
  return (
    <div className="webapp">
      <div className="todo-container">
        <Card />
      </div>

      <div className="other-container">
        <div className='spotify-container'>
          <Spotify />
        </div>
        <div className='weather-container'>
          <Weather />
        </div>
      </div>
    </div>
  );
}


export default App;
