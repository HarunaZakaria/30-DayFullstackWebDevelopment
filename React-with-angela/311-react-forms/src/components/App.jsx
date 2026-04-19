import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headText, setHeadText] = useState("");
  function changeEvent(e) {
    setName(e.target.value);
    //console.log(e.target.value);
  }
  function greetName(e) {
    setHeadText(name);
    e.preventDefault();

  }
  return (
    <div className="container">
      <h1>Hello {headText} </h1>
      <form onSubmit={greetName}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={changeEvent}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
