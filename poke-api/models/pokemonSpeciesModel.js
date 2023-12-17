const mongoose = require("mongoose");

const speciesSchema = mongoose.Schema({
  _id: {
    type: String,
  },
  id: {
    type: Number,
  },
  evolves_from_species: {
    type: Object,
  },
});

const Species = mongoose.model("species", speciesSchema);

module.exports = Species;
