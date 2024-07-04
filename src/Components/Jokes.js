import React, { useState, useEffect } from 'react';
export default function MansGotJokes() {

  const [joke, setJoke] = useState({ setup: '', punchline: ''});

  const fetchJoke = async () => {
    try {
      const response = await fetch ('https://official-joke-api.appspot.com/random_joke')
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.error('Too dry of a joke..', error);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);
  
  return (
    <div className="Jokes">
      <h1>Here's the joke</h1>
      <div class="joke-container">
        <p><strong>Setup: </strong>{joke.setup}</p>
        <p><strong>Punchline: </strong>{joke.punchline}</p>
      </div>
    </div>
  )
}