import { contacts } from "../contacts";
import React from "react";
import Card from "./Card";
import Avator from "./Avator";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div>
        <Avator img="https://avatars.githubusercontent.com/u/104790819?v=4?s=400" />
      </div>
      <div>
        {contacts.map((contact, index) => (
          <div key={index}>
            <Card
              name={contact.name}
              img={contact.imgURL}
              phone={contact.phone}
              email={contact.email}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
