import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

const emojmean = emojipedia[0].meaning;
const cutMean= emojmean.substring(1, 100)
console.log(cutMean);
function createEmojiTerm(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning.substring(0, 100)}
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
