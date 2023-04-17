import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "./useTodoState";
import "./styles.css";
import logo from "./assets/Logo.jpeg";
import Footer from "./Footer";

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <img alt="Logo" src={logo} />
      <h2>Nicole To Do List</h2>

      <TodoForm
        onSaveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
