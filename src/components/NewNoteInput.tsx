import React, { ChangeEvent, useState } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");

  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        type="text"
        name="note"
        id="Note"
        onChange={updateNote}
        value={note}
      />
      <button onClick={onAddNoteClick}>Add Note</button>
    </div>
  );
};
