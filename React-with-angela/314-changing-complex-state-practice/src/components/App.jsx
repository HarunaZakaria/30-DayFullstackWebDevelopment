import React, { useState } from "react";

function App() {
  // const [contact, setContact] = useState({
  //   fName: "",
  //   lName: "",
  //   email: "",
  // });

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");

  const [updatedFName, setUpdatedFName] = useState("");
  const [updatedLName, setUpdatedLName] = useState("");
  const [updatedEmail, setupdatedEmail] = useState("");
  function updateContact(event) {
    //event.preventDefault();
    const [setFName, setLName, setEmail] = event.target.value;
  }

  function updatContact(e) {
    e.preventDefault()
    setUpdatedFName(fName);
    setUpdatedFName(lName);
    setUpdatedFName(email);
  }

  console.log(updatedFName)
  console.log(updatedLName)
  console.log(updatedEmail)
  return (
    <div className="container">
      <h1>
        Hello {updatedFName} {updatedLName}
      </h1>
      <p>{updatedEmail}</p>
      <form onSubmit={updatContact}>
        <input name="fName" placeholder="First Name" onChange={updateContact} />
        <input name="lName" placeholder="Last Name" onChange={updateContact} />
        <input name="email" placeholder="Email" onChange={updateContact} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
