import React, { createContext, useState, useContext, useEffect } from "react";
import {
  fetchTodo,
  createTodo,
  deleteTodo,
  updateTodoDescriptionAPI,
} from "./services/fetch";
// import { v4 } from "uuid";

const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

export default function TodoProvider({ children }) {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodoAsync = async () => {
      const fetchedTodo = await fetchTodo();
      setTodo(fetchedTodo);
    };
    fetchTodoAsync();
  }, []);

  const addTodo = async (todo) => {
    const todos = await createTodo(todo);
    setTodo((prevTodos) => [...prevTodos, todos]);
    // setTodo([
    //   ...todos,
    //   {
    //     id: v4(),
    //     description,
    //     completed: false,
    //   },
    // ]);
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

  const setStatusTodo = (id, status) => {
    setTodo(todos.map((t) => (t.id === id ? { ...t, completed: status } : t)));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteSingleTodo,
        updateTodoDescription,
        setStatusTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
