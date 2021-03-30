import React, { useState } from "react";
import { isPropertySignature } from "typescript";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const newName = event.target.name;
    const newValue = event.target.value;
    setNote((preValue) => {
      return {
        ...preValue,
        [newName]: newValue,
      };
    });
  }
  function submitBtn(event) {
    event.preventDefault();
    props.OnAdd(note);
    setNote({ title: "", content: "" });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={submitBtn}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
