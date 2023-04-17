import React from "react";
import useInputState from "./useInputState";

const TodoForm = ({ onSaveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        onSaveTodo(value);
        reset();
      }}
    >
      <input
        type="text"
        className="inputText"
        placeholder="Add todo"
        onChange={onChange}
        value={value}
      />
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
