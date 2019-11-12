export enum ToDoListActionType {
  ADD = "TODOLIST/ADD",
  REMOVE = "TODOLIST/REMOVE"
}

export interface ToDoListAction {
  idx?: number;
  value?: string;
  type: ToDoListActionType;
}

export const add = (value: string): ToDoListAction => ({
  value,
  type: ToDoListActionType.ADD
});

export const remove = (idx: number): ToDoListAction => ({
  idx,
  type: ToDoListActionType.REMOVE
});
