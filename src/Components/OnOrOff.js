import React, { useState} from 'react';
import Button from './Button';
export default function OnOrOff({ first, second }) {

  const [isOn, setIsOn] = useState(false);

  const toggleButton = () => {
    setIsOn(prevIsOn => !prevIsOn);
  }
  return (
    <Button label={isOn ? first : second} onClickCallBack={toggleButton}></Button>
  )
}

