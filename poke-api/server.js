const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Pokemons = require("./models/pokemonsModel");
const Details = require("./models/pokemonDetailsModel");
const Species = require("./models/pokemonSpeciesModel");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/pokemon", async (req, res) => {
  try {
    const pokemons = await Pokemons.find({});
    res.status(200).json({ results: pokemons });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/pokemon/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const pokemon = await Details.find({ name: name });
    res.status(200).json(pokemon[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/pokemon/species/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const specie = await Species.find({ id: id });
    console.log(specie);
    res.status(200).json(specie[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://loljavierdelago:e7wTYYh3dxc91vml@cluster.zhd2ptw.mongodb.net/pokedex?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Node API app is running on port 3000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
