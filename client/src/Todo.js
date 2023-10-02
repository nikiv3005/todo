import React, { useState } from "react";
import { useTodo } from "./TodoProvider";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import "./styles.css";

export default function Todo({ id, description, completed }) {
  const { deleteSingleTodo, updateTodoDescription, updateTodoStatus } =
    useTodo();

  const checkTodo = (e) => updateTodoStatus(id, e.target.checked);

  const [isEditMode, setEditMode] = useState(false);
  const [editedTodoDescription, setEditedTodoDescription] = useState("");

  const handleEdit = (id, currentDescription) => {
    setEditMode(id);
    setEditedTodoDescription(currentDescription);
  };

  const saveEdit = () => {
    updateTodoDescription(id, editedTodoDescription);
    setEditedTodoDescription("");
    setEditMode(false);
  };

  const handleDelete = (id) => {
    deleteSingleTodo(id);
  };

  return (
    <tr>
      <td>
        <input type="checkbox" onChange={checkTodo} checked={completed} />
      </td>
      <td key={id}>
        {isEditMode ? (
          <>
            <input
              type="text"
              value={editedTodoDescription}
              onChange={(e) => setEditedTodoDescription(e.target.value)}
            />
            <IconButton onClick={() => saveEdit()}>
              <SaveIcon />
            </IconButton>
          </>
        ) : (
          <>
            <td className="description">
              <span className={completed ? "todo-done" : ""}>
                {description}
              </span>
            </td>
            {!completed && (
              <>
                <td>
                  <IconButton onClick={() => handleEdit(id, description)}>
                    <EditIcon />
                  </IconButton>
                </td>
                <td>
                  <IconButton onClick={() => handleDelete(id)}>
                    <DeleteIcon />
                  </IconButton>
                </td>
              </>
            )}
          </>
        )}
      </td>
    </tr>
  );
}
