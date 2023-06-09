const express = require("express");
const app = express();
const port = 5050;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let todos = [
  {
    id: 1,
    description: "eat",
    completed: "false",
  },
  {
    id: 2,
    description: "sleap",
    completed: "true",
  },
  {
    id: 3,
    description: "work",
    completed: "false",
  },
];

app.get("/", (request, response) => response.status(200).json(todos));

app.post("/todo", (request, response) => {
  const newTodo = {
    id: todos.length + 1,
    description: request.body.description,
    completed: request.body.completed,
  };
  todos.push(newTodo);
  response.status(201).json(newTodo);
});

app.put("/todo/:id", (request, response) => {
  const id = parseInt(request.params.id);
  const updatedTodo = todos.find((t) => t.id === id);
  if (!updatedTodo) {
    return response.status(404).json({ error: "Todo not found" });
  }
  updatedTodo.description = request.body.description || updatedTodo.description;
  updatedTodo.completed = request.body.completed || updatedTodo.completed;
  response.json(updatedTodo);
});

app.delete("/todo/:id", (request, response) => {
  var id = parseInt(request.params.id);
  if (todos.filter((todo) => todo.id == id).length !== 0) {
    todos = todos.filter((todo) => todo.id !== id);
    response.status(200).send({ message: "succesfully deleted todo " + id });
  } else {
    response.status(404).send({ error: "Todo not found" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
