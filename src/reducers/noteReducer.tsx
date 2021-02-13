import { ActionType } from "../actions/ActionTypes";

//state
export interface NotesState {
  notes: string[];
}

const initialState = {
  notes: [],
};

export const notesReducer = (
  state: NotesState = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, action.payload] };

    default:
      return state;
  }
};
