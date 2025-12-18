import e from 'express';
import express from 'express';
const app = express();
const port = 3000;
//home
app.get('/', (req, res) => {
  res.send('Hello world');
});
//sign in
app.get('/signin', (req, res) => {
  res.send('Welcome To Sign In Page');
});
//sign up
app.get('/signup', (req, res) => {
  res.send('Welcome To Sign Up Page');
});

app.listen(port, () => {
  console.log(`Server running on portd ${port}`);
});
