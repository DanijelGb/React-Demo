import React, { useState} from 'react';
import '../App.css'

export default function OnOrOff({ first, second , link}) {
  const [isOn, setIsOn] = useState(false);

  const toggleImage = () => {
    setIsOn(prevIsOn => !prevIsOn);
  }

  return (
    <div className='container-toggle'>
      <div className='imageContainer-toggle'>
        <a href={isOn ? link : link} target="_blank" rel="noopener noreferrer">
          <img src={isOn ? second : first} alt="Toggling Image" className='image-toggle' />
        </a>
        <img src={isOn ? first : second} alt="Overlapping Image" className='overlappingImage-toggle' />
        <button onClick={toggleImage} className='button-toggle'>Byt Bild</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  imageContainer: {
    position: 'relative',
    width: '220px',  // Adjust as needed
    height: '220px', // Adjust as needed 
    display: 'inline-block',
  },
  image: {
    width: '500px',  // Adjust as needed
    height: '400px', // Adjust as needed
    position: 'absolute',
    top: '20px',   // Adjust as needed
    left: '-100px',  // Adjust as needed
    zIndex: 1,
    border: 'solid 1px gray'
  },
  overlappingImage: {
    width: '400px',  // Adjust as needed
    height: '350px', // Adjust as needed
    position: 'absolute',
    top: '0px',   // Adjust as needed
    left: '-160px',  // Adjust as needed
    zIndex: 0,
    opacity: 0.5, // Adjust opacity as needed to create an overlap effect
    border: 'solid 1px gray'
  },
  button: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    border: '1px solid #000',
    padding: '5px 10px',
    cursor: 'pointer',
    zIndex: 2,
    backgroundColor: 'purple',
  },
};