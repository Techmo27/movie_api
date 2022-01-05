const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Models = require('./models.js');

const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect('mongodb://localhost:27017/myFlixDB', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(morgan('common'));

let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model('User', userSchema);

let topMovies = [
  {
    title: 'Movie1'
  },
  {
    title: 'Movie2'
  },
  {
    title: 'Movie3'
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

app.get('/genres/:genre', (req, res) => {
  res.send('Successful GET request which describes the genre of a movie.');
});

app.get('/directors/:name', (req, res) => {
  res.send('Successful GET request which introduces the director.');
});

app.post('/users', (req, res) => {
  res.send('User has been added successfully!');
});

app.put('/users/:username', (req, res) => {
  res.send('User has successfully changed her/his username!');
});

app.get('/users/:username/favorites', (req, res) => {
  res.send('Successful GET request that returns a list of users favorites.');
});

app.post('/users/:username/favorites/:movieID', (req, res) => {
  res.send('User added one movie to her/his favorites list.');
});

app.delete('/users/:username/favorites/:movieID', (req, res) => {
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
