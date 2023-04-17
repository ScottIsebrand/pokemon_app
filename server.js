// Require modules
require('dotenv').config();
// Require Express
const express = require('express');
// Create Express app
const app = express();
// Bring in the data
const Pokemon = require('./models/Pokemon');
const connectToDB = require('./config/pokemondb');

const methodOverride = require('method-override');

// === TEMPLATE ENGINES configurations/settings
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// === MIDDLEWARE
// == Middleware (app.use): parsess the incoming data from the request so we don't need to use extended file name; makes data accessible
app.use(express.urlencoded({ extended: false }));
// == Middleware (app.use): override using a query value so that when we make request from form
app.use(methodOverride('_method'));
// == Middleware (app.use): body-parser
app.use((req, res, next) => {
  // console.log(req.url);
  next();
});

// === ROUTES
// Route: Homepage message
app.get('/', function (req, res) {
  res.render('Home');
});

// Route: NEW (form), (location views/New.jsx), for form; HTTP verb is .get; action is new)
app.get('/pokemon/new', (req, res) => {
  res.render('New');
});

// Route: POST/CREATE document (ie HTTP verb is .post; action is create; Mongoose func. is .create; CRUD op is Create)
app.post('/pokemon', (req, res) => {
  // console.log(req.body);
  Pokemon.create(req.body, (error, createdLog) => {
    res.redirect('/pokemon');
  });
  //   res.send(req.body);
});

// Route: INDEX (ie HTTP verb is GET; action is index; Mongoose func is .find; CRUD operator is Read)
app.get('/pokemon', (req, res) => {
  Pokemon.find({}, (error, pokemon) => {
    res.render('Index', { pokemon: pokemon });
  });
});

// SHOW ROUTE to return/send back ONE pokemon
app.get('/pokemon/:id', (req, res) => {
  Pokemon.findById(req.params.id, (error, foundPokemon) => {
    res.render('Show', { pokemon: foundPokemon });
  });
});

// Route: render 404 page
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
  connectToDB();
});
