import React from "react";
import { useTodo } from "./TodoProvider";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Todo({ id, description, complete }) {
  const { setStatusTodo, deleteTodo } = useTodo();

  const checkTodo = (e) => setStatusTodo(id, e.target.checked);

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          onChange={checkTodo}
          checked={description.complete}
        />
      </td>
      <td>
        <span className={complete ? "todo-done" : ""}>{description}</span>
      </td>
      <td>
        <IconButton className="close" onClick={() => deleteTodo(id)}>
          <DeleteIcon />
        </IconButton>
      </td>
    </tr>
  );
}
