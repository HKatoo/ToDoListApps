import { Reducer } from "redux";
import { ToDoListActionType, ToDoListAction } from "./actions/todolist";

export interface ToDoListState {
  items: string[];
}

export const initialState = {
  items: []
};

const toDoListReducer: Reducer<ToDoListState, ToDoListAction> = (
  state: ToDoListState = initialState,
  action: ToDoListAction
): ToDoListState => {
  switch (action.type) {
    case ToDoListActionType.ADD:
      if (action.value) {
        state.items = state.items.concat(action.value);
      }
      return {
        ...state,
        items: state.items
      };
    case ToDoListActionType.REMOVE:
      return {
        ...state,
        items: state.items.filter((todo, index) => index !== action.idx)
      };
    default:
      return state;
  }
};

export default toDoListReducer;
