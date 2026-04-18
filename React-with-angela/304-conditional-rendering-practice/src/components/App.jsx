import React from "react";
import Form from "./Form";
import Admin from "./Admin";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {/* <Form isRegistered={userIsRegistered} /> */}
      <Admin />
    </div>
  );
}

export default App;
