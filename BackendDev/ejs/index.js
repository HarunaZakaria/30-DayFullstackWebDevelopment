import express from "express";
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
// Optional: Specify the views directory (default is './views')
// app.set('views', './views');

// Define a route to render an EJS template
app.get("/", (req, res) => {
  const day = new Date();
  let today = day.getDay();
  console.log(today);

  let theDay = "It's a weekday";
  let adv = "Go and work hard!";

  if (today === 0 || today === 1) {
    theDay = "It's a weekend";
    adv = "Go out and have fun!";
  }
  // Pass data to the template
  res.render("index", {
    title: "Hey",
    day: theDay,
    message: adv,
    name: "Hello from Harunzy!",
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
