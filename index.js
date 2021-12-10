const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));
app.use(express.static('public'));

let topMovies = [
  {
    name: 'Movie1'
  },
  {
    name: 'Movie2'
  },
  {
    name: 'Movie3'
  }
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to the myFlix app!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/movies/:title', (req, res) => {
  res.send('Successful GET request which shows a movie by its title.');
});

app.get('/movies/genre/:title', (req, res) => {
  res.send('Successful GET request which describes the genre of a movie.');
});

app.get('/movies/directors/:name', (req, res) => {
  res.send('Successful GET request which introduces the director.');
});

app.post('/users', (req, res) => {
  res.send('User has been added successfully!');
});

app.put('/users/:username', (req, res) => {
  res.send('User has successfully changed her/his username!');
});

app.post('users/:username/favorites/:ID', (req, res) => {
  res.send('User added one movie to her/his favorites list.');
});

app.delete('users/:username/favorites/:ID', (req, res) => {
  res.send('User has successfully deleted one movie from her/his favorites.');
});

app.delete('/users/:username', (req, res) => {
  res.send('Users account has been deleted!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('An error is found.');
  next();
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
