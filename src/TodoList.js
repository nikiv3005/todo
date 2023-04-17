import React from "react";

const TodoList = ({ todos, deleteTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>
        <input value={todo} type="checkbox" className="checkbox" />
        <span>{todo}</span>
        <button
          className="Close"
          onClick={() => {
            deleteTodo(index);
          }}
        >
          Close
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
