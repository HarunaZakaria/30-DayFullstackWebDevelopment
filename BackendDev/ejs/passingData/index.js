import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const nameLength = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", {
    numOfLetters: nameLength,
  });
});

// API endpoint that returns JSON
app.post("/api/submit", (req, res) => {
  try {
    const nameLength = req.body["fName"].length + req.body["lName"].length;
    res.json({
      success: true,
      numOfLetters: nameLength,
      fName: req.body["fName"],
      lName: req.body["lName"]
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
