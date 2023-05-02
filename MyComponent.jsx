import React, { useState } from 'react';

function MyComponent() {
  const [counter, setCount] = useState();

  incrementCounter() {
    setCount(counter + 1);
  }

  return (
    <div>
      <h1>My Component</h1>
      <p>The current count is: {counter}</p>
      <button onClick={incrementCounter}>Click me</button>
    </div>
  );
}

export default MyComponent;
