import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteItems, setNoteItems] = useState([]);
  function addNote(note) {
    setNoteItems((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNoteItems((prevNotes) => {
      return prevNotes.filter((noteItems, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {noteItems.map((noteItem, index) => {
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
            key={index}
            id={index}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
