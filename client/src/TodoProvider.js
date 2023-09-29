import React, { createContext, useState, useContext, useEffect } from "react";
import {
  fetchTodoList,
  createTodo,
  deleteTodo,
  updateTodoDescriptionAPI,
  updateTodoStatusAPI,
} from "./services/fetch";

const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

export default function TodoProvider({ children }) {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodoListAsync = async () => {
      const fetchedTodo = await fetchTodoList();
      setTodo(fetchedTodo);
    };
    fetchTodoListAsync();
  }, []);

  const addTodo = async (todo) => {
    const createdTodo = await createTodo(todo);
    setTodo((prevTodos) => [...prevTodos, createdTodo]);
  };

  const updateTodoDescription = async (id, description) => {
    const updatedTodo = await updateTodoDescriptionAPI(id, description);
    setTodo((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, description: updatedTodo.description }
          : todo
      );
    });
  };

  const deleteSingleTodo = async (id) => {
    await deleteTodo(id);
    setTodo((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const updateTodoStatus = async (id, completed) => {
    const updatedTodo = await updateTodoStatusAPI(id, completed);
    setTodo(
      todos.map((t) =>
        t.id === id ? { ...t, completed: updatedTodo.completed } : t
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteSingleTodo,
        updateTodoDescription,
        updateTodoStatus,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
