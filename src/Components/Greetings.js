import React, { useState, useEffect } from 'react';

export default function PersonalizedOutput() {

  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div class="Greeter">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      <p>{name ? `Hello, ${name}!` : 'Please enter your name'}</p>
    </div>
  )
}
