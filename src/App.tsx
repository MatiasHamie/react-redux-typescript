import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { NotesState } from "./reducers/noteReducer";
import { addNote } from "./actions/Actions";

// Components
import { NewNoteInput } from "./components/NewNoteInput";

function App() {
  // Obtengo las notas usando redux
  // useSelector<Tipo de dato del state, tipo del dato de retorno del use Selector>
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  // Dispatcher
  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />

      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
