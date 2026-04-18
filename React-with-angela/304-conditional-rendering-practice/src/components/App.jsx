import React, { useState } from "react";
import Form from "./Form";
import Admin from "./Admin";

const userIsRegistered = true;

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }
   function diCreaseCount() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      {/* <Form isRegistered={userIsRegistered} /> */}
      {/* <Admin /> */}
      <h1>{count}</h1>
      <button onClick={increaseCount}>+</button>
      <button onClick={diCreaseCount}>-</button>
    </div>
  );
}

export default App;
