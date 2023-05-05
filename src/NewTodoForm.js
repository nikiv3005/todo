import React, { useState } from "react";
import { useTodo } from "./TodoProvider";

export default function NewTodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const submit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={todo}
        placeholder="Doing ..."
        onChange={(e) => setTodo(e.target.value)}
        required
      />
      <button>Add</button>
    </form>
  );
}
