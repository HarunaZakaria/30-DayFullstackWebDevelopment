//import the dependencies
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import e from "express";

//initialize the express app
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//define a route to handle GET requests
app.get("/", (req, res) => {
  res.render("index.ejs");
});
//define a route to handle POST requests

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
