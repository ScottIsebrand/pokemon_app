const mongoose = require('mongoose');

// Mongoose Pokemon Schema
const pokemonSchema = new mongoose.Schema({
  name: { type: String },
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
