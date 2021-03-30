import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((preNotes) => {
      return [...preNotes, newNote];
    });
  }
  function deleteNote(note) {
    setNotes((preNotes) => {
      return preNotes.filter((value, index) => {
        return index !== note;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea OnAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            OnDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
