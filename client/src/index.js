import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import "./styles.css";
import TodoProvider from "./TodoProvider";

ReactDOM.render(
  <TodoProvider>
    <App />
  </TodoProvider>,
  document.getElementById("root")
);
