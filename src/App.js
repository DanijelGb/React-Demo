// src/App.js
// src/App.js
import React, { useState } from 'react';
import Button from './Components/Button';
import MansGotJokes from './Components/Jokes';
import OnOrOff from './Components/OnOrOff';
import PersonalizedOutput from './Components/Greetings';
import Card from './Components/Card';
import Menu from './Components/Menu';
import './App.css';
import Pics from './Components/Picture';
import pic from './Components/Pics/bild-cap.jpg';
import Message from './Components/Message';
import TextInput from './Components/TextInput';
import Info from './Components/Info';


function App() {
  return (
    <div className="app">
      <div className='container'>
        <div className='links'>
          <Menu></Menu>
        </div>
        <div className='content'>
          <TextInput text='Danijel Grbic' size='p' cName='myName' />
          <TextInput text="Hej! Jag är Danijel, blivande mjukvaru-programmerare." size='p' cName='intro' />
          <div className='container'>
            <div className='links'>
              <Pics image={pic} altText="Picture of me"/> 
            </div>
            <div className='content'>
              <Info/>
            </div>
          </div>
          <Message/>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
// src/App.js
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
*/
