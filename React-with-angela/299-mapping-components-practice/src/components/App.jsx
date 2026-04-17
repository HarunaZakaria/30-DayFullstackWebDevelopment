import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmojiTerm(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEmojiTerm)}
        {/* alternative way to map list of items */}
        {/* {emojipedia.map((emoji, index) => (
          <div key={emoji.id}>
            <Entry
              emoji={emoji.emoji}
              name={emoji.name}
              meaning={emoji.meaning}
            />
          </div>
        ))} */}
      </dl>
    </div>
  );
}

export default App;
