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

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=7da51fcd67b2bed49eab674bcc25bcc1&units=metric";

app.post("/submit", async (req, res) => {
  const cityName = req.body.bookName;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7da51fcd67b2bed49eab674bcc25bcc1&units=metric`;
  try {
    const response = await axios.get(weatherUrl);
    const weatherData = response.data;
    console.log(weatherData);
    const weatherDescription = `The weather in ${weatherData.name} is ${weatherData.weather[0].description} with a temperature of ${weatherData.main.temp}°C.`;
    res.render("index.ejs", { weather: weatherDescription });
  } catch (error) {
    res.render("index.ejs", { weather: "City not found. Please try again." });
  }
});

//start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
