import express from 'express';

const app = express();
const port = 3000;
//create a custome middleware to log request method and url
function logger(req, res, next) {
  console.log(
    `This is the request metho: ${req.method} and the url is : ${req.url}`
  );
  next();
}

app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
