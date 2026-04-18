import React from "react";
import LogIn from "./LogIn";

let isLoggedIn = false;

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <LogIn />}</div>
  );
}

export default App;
