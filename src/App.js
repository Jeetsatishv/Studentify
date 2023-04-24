import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spotify } from './components/Spotify';
import { Weather } from './components/Weather';
import { Form } from "./components/Form";
import './App.css';

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getToken = async () => {
      const response = await axios.get('/auth/token');
      if (response.data.access_token) {
        setAccessToken(response.data.access_token);
      }
    };

    getToken();
  }, []);

  useEffect(() => {
    if (accessToken) {
      fetchSpotifyUser(accessToken);
    }
  }, [accessToken]);

  async function fetchSpotifyUser(token) {
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setUserName(data.display_name);
  }

  // if (!userName) {
  //   return (
  //     <div className="login-container">
  //       <a className="btn-spotify" href="/auth/login">Log in with Spotify</a>
  //     </div>
  //   );
  // }

  return (
    <div className="webapp">
      <div className="Welcome Title">
        {userName && <h1>Welcome, {userName}!</h1>}
      </div>

      <div className='todo-container'>
        <Form />
      </div>

      <div className="other-container">
        <div className="spotify-container">
          <Spotify />
        </div>
        <div className="weather-container">
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default App;

