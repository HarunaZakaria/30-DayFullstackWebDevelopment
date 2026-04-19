import React, { useState } from "react";

function App() {
  const [isMouseHover, setIsMouseHover] = useState(false)
  function mouseIn() {
    setIsMouseHover(true)
  }
  function mouseOut() {
    setIsMouseHover(false)
  
  }
  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={mouseIn} onMouseOut={mouseOut} style={{backgroundColor: isMouseHover ? "black": "white"}}>
        Submit
      </button>
    </div>
  );
}

export default App;
