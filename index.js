const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

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
  res.send('This is my movie api!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
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
