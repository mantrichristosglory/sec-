import React, { useState, useEffect } from 'react';
import './App.css';

function Count() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('white');
function toggleBgColor() {
    if (count > 5) {
      setBgColor(green);
    } else {
      setBgColor(white);
    }
  }

  React.useEffect(() => {
    toggleBgColor();
  }, [count]);

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Count;