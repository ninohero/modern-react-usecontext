import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/Todo.reducer";
import useTodoStates from "../hooks/useTodoState";
const defaultTodos = [
  { id: 1, task: "Mow lawn", completed: false },
  { id: 2, task: "Release bugs", completed: true },
];
export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
};
