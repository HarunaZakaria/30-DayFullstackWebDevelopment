import e from 'express';
import express from 'express';
const app = express();
const port = 3000;
//home
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});
//sign in
app.get('/signin', (req, res) => {
  res.send('<h1>Welcome To Sign In Page</h1>');
});
//sign up
app.get('/signup', (req, res) => {
  res.send('Welcome To Sign Up Page');
});
//diffent HTTP requestss

//post request
app.post('/register', (req, res) => {
  res.sendStatus(201);
});
//put request
app.put('/user', (req, res) => {
  res.sendStatus(200);
});
//patch request
app.patch('/user/haruna', (req, res) => {
  res.sendStatus(200);
});
//delete request
app.delete('/user/zakaria', (req, res) => {
  res.sendStatus(200);
});
app.listen(port, () => {
  console.log(`Server running on portd ${port}`);
});
