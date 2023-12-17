const mongoose = require("mongoose");

const detailsSchema = mongoose.Schema({
  _id: {
    type: String,
  },
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  sprites: {
    type: Object,
  },
  species: {
    type: Object,
  },
  types: {
    type: Object,
  },
});

const Details = mongoose.model("details", detailsSchema);

module.exports = Details;
