import React, { useState } from 'react';

function MyComponent2() {
  const [date, setDate] = useState(new Date());

  const formatDate = () => {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <h1>My Component</h1>
      <p>The current date is: {formatDate()}</p>
      <button onClick={setDate(new Date())}>Refresh</button>
    </div>
  );
}

export default MyComponent2;
