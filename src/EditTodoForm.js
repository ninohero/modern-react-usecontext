import React, { useContext } from "react";
import useInputState from "./hooks/useToggleState";
import TextField from "@material-ui/core/TextField";
import { TodosContext } from "./context/todos.context";

const EditTodoForm = ({ id, task, toggleEditForm }) => {
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ margin: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
};
export default EditTodoForm;
