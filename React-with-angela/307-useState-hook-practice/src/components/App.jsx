import React, { useState } from "react";

function App() {
  //1. Given that you can get the current time using:
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function getNewTime() {
    const netTime = new Date().toLocaleTimeString();
    setTime(netTime);
  }
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getNewTime}>Get Time</button>
    </div>
  );
}

export default App;
