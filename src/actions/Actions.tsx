import { ActionType } from "./ActionTypes";

//action to dispatch
export const addNote = (note: string): ActionType => ({
  type: "ADD_NOTE",
  payload: note,
});
