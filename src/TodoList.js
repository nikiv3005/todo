import React from "react";
import Todo from "./Todo";
import { useTodo } from "./TodoProvider";

export default function TodoList() {
  const { todos } = useTodo();
  return (
    <table>
      <tbody>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </tbody>
    </table>
  );
}
