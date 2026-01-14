//import the dependencies
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

//initialize the express app
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//define a route to handle GET requests
app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.get("/search", async (req, res) => {
  const query = req.body.bookName;

  const response = await axios.get(
    `https://openlibrary.org/search.json?q=${query}`
  );

  const books = response.data.docs.map((book) => ({
    title: book.title,
    author: book.author_name?.[0],
    year: book.first_publish_year,
    pdf: book.ia ? `https://openlibrary.org/books/${book.ia}.pdf` : null,
  }));

  res.json(books);
});
//submit a form to search for books
app.post("/submit", async (req, res) => {
  const search = req.body.bookName;

  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${search}`
    );
    const books = response.data;
    const title = books.docs[0].title;
    const author = books.docs[0].author_name;
    console.log(`Title: ${title}, Author: ${author}`);
    res.render("index.ejs", { books: books });
  } catch (error) {
    console.error("Error fetching data from Google Books API:", error);
    res.render("index.ejs", { books: [] });
  }
});
//define a route to handle POST requests

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
