const express = require("express");
const app = express();
const port = 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const routes = require("./src/index");
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
