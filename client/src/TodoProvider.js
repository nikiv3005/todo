import React, { createContext, useState, useContext } from "react";
import { v4 } from "uuid";

const TodoContext = createContext();
export const useTodo = () => useContext(TodoContext);

export default function TodoProvider({ children }) {
  const [todos, setTodo] = useState([]);

  const addTodo = (description) =>
    setTodo([
      ...todos,
      {
        id: v4(),
        description,
        complete: false,
      },
    ]);

  const deleteTodo = (id) => {
    setTodo([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const setStatusTodo = (id, status) => {
    setTodo(todos.map((t) => (t.id === id ? { ...t, complete: status } : t)));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, setStatusTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
