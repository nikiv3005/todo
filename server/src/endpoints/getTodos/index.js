const express = require("express");
const getTodosRoutes = express.Router();

router.get("/getTodos", (req, res) => {
  res.status(200).json({ message: "Successful", todos });
});

export default getTodosRoutes;
