// src/App.js
// src/App.js
import React, { useState } from 'react';
import Button from './Components/Button';


function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

function App() {
 
const [count, setCount] = useState(0);

const increase = () => {
    setCount(count + 1);
};

const decrease = () => {
    setCount(count - 1);
};

 return (
    <div className="App">
      <HelloMessage name="John" />
      <p>Current count: {count}</p>

      <Button label="increase" onClickCallBack={increase}/>
      <Button label="decrease" onClickCallBack={decrease}/>
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
