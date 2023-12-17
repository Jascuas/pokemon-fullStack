const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  name: {
    type: String,
  },
  _id: {
    type: String,
  },
  url: {
    type: String,
  },
});

const Pokemon = mongoose.model("pokemon", pokemonSchema);

module.exports = Pokemon;
