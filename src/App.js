// src/App.js
// src/App.js
import React, { useRef } from 'react';
import styles from './Components/Card.module.css'
import './App.css';
import Pics from './Components/Picture';
import pic from './Components/Pics/bild-cap.jpg';
import Message from './Components/Message';
import TextInput from './Components/TextInput';
import Info from './Components/Info';
import GitHub from './Components/GitHub';

function App() {

  const startRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);


    // Scroll handler
  const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

  return (

    <div className="app">
      <div className='container-one'>
        <div className='linkz'>
          <div className={styles.container}>
            <ul className={styles.menu}>
                <li>
                    <a className={styles.start} href='#start' onClick={(e) => { e.preventDefault(); scrollToRef(startRef); }}>
                        Start
                    </a>
                </li>
                <li>
                    <a className={styles.start} href="#about" onClick={(e) => { e.preventDefault(); scrollToRef(aboutRef); }}>
                        Om mig
                    </a>
                </li>
                <li>
                    <a className={styles.start}href="#project" onClick={(e) => { e.preventDefault(); scrollToRef(projectRef); }}>
                        Projekt
                    </a>
                </li>
            </ul>
        </div>
        </div>
        <div className='content-one' section id="start" ref={startRef}>
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
          <Message ref={aboutRef}/>
          <div ref={projectRef}/>
          <GitHub/> 
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
