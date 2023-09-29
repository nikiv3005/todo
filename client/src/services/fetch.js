// GET
export const fetchTodoList = async () => {
  const response = await fetch("http://localhost:5050/");
  const data = await response.json();
  return data;
};

// Post
export const createTodo = async (todo) => {
  const response = await fetch("http://localhost:5050/todo", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
};

//Update
export const updateTodoDescriptionAPI = async (id, description) => {
  const response = await fetch(`http://localhost:5050/todo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description }),
  });
  const data = await response.json();
  return data;
};

//Update status
export const updateTodoStatusAPI = async (id, completed) => {
  const response = await fetch(`http://localhost:5050/todo/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });
  const data = await response.json();
  return data;
};

//Delete
export const deleteTodo = async (id) => {
  const response = await fetch(`http://localhost:5050/todo/${id}`, {
    method: "DELETE",
  });
  return;
};
