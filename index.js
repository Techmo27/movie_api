const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
let topMovies = [];

app.use(morgan('common'));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extend:true
 }
));
app.use(bodyParser.json());

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
