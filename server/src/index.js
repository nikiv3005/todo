const express = require("express");
const router = express.Router();

const getTodosRoutes = require("./endpoints/getTodos");

router.use(getTodosRoutes);

export default router;
