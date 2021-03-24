import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function App() {
  function addNote(items) {
    return <Note key={items.key} title={items.title} content={items.content} />;
  }
  return (
    <div>
      <Header />
      {notes.map(addNote)}
      <Footer />
    </div>
  );
}
export default App;
