const express = require('express');
const app = express();
let tenMovies = [];

let myLogger = (req, res, next) => {
  console.log(req.url);
  next();
};
app.use(myLogger);

app.use(express.static('public'));

// GET requests
app.get('/', (req, res) => {
  res.send('This is my movie api!');
});

app.get('/movies', (req, res) => {
  res.json(tenMovies);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
