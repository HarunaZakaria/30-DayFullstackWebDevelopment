import express from "express";
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
// Optional: Specify the views directory (default is './views')
// app.set('views', './views');

// Define a route to render an EJS template
app.get("/", (req, res) => {
  // Pass data to the template
  res.render("index", {
    title: "Hey",
    message: "Hello from Harunzy!",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
