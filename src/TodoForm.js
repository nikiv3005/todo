import React from "react";
import TextField from "@material-ui/core/TextField";
import useInputState from "./useInputState";
import Button from "@material-ui/core/Button";

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        onChange={onChange}
        value={value}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default TodoForm;
