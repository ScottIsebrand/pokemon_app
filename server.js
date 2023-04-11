const express = require('express');
// Create Express app
const app = express();
// Data
const pokemon = require('./models/pokemon');
const port = 3000;

// Configure the app (app.set)
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// Mount middleware (app.use)
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Pokemon App!</h1>');
});

app.get('/pokemon', (req, res) => {
  res.send(pokemon);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
