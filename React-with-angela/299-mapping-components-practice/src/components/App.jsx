import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map((emoji, index) => (
        <div key={emoji.id}>
          <Entry
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
