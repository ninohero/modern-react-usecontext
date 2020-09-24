import React, { createContext } from "react";
import useTodoStates from "../hooks/useTodoState";
const defaultTodos = [
  { id: 1, task: "Mow lawn", completed: false },
  { id: 2, task: "Release bugs", completed: true },
];
export const TodosContext = createContext();

export const TodosProvider = (props) => {
  const todosStuff = useTodoStates(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
};
