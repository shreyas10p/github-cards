import React, { useState,useEffect } from 'react';


export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Button that will track
      how many times you click it:
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}