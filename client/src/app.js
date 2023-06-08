import React from "react";
import TodoList from "./TodoList";
import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import NewTodoForm from "./NewTodoForm";

function App() {
  return (
    <div className="app">
      <Header />

      <NewTodoForm />

      <TodoList />
      <Footer />
    </div>
  );
}
export default App;
