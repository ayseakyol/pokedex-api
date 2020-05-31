const pokedex = require("../data/pokedex.json");
const logic = require("../logic");

const handlers = {
  home: (req, res) => {
    res.send("PokeDex API!");
  },
  all: (req, res) => {
    res.json(pokedex);
  },
  valuesForKey: (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const key = req.params.key;
    const obj = JSON.parse(JSON.stringify(pokedex));

    // use the logic you wrote to process the pokedex data
    try {
      const result = logic.valuesForKey(obj.pokemon, key);
      console.log(result);

      // respond with the return value if there was no error
      res.json(result);
    } catch (err) {
      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  evolutionsOf: async (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const name = req.params.name;
    const obj = JSON.parse(JSON.stringify(pokedex));

    // use the logic you wrote to process the pokedex data
    try {
      const result = await logic.evolutionsOf(obj.pokemon, name);

      // respond with the return value if there was no error
      res.json(result);
    } catch (err) {
      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  typeStats: async (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const type = req.params.type;
    const obj = JSON.parse(JSON.stringify(pokedex));

    // use the logic you wrote to process the pokedex data
    try {
      const result = logic.typeStats(obj.pokemon, type);

      // respond with the return value if there was no error
      res.json(result);
    } catch (err) {
      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  findById: async (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const id = Number(req.params.id);
    const obj = JSON.parse(JSON.stringify(pokedex));

    // use the logic you wrote to process the pokedex data
    try {
      const result = await logic.findBy.id(obj.pokemon, id);

      // respond with the return value if there was no error
      res.json(result);
    } catch (err) {
      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  findByType: async (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const type = req.params.type;
    const obj = JSON.parse(JSON.stringify(pokedex));

    // use the logic you wrote to process the pokedex data
    try {
      const result = await logic.findBy.type(obj.pokemon, type);

      // respond with the return value if there was no error
      res.json(result);
    } catch (err) {
      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  findByWeakness: async (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const type = req.params.type;
    const obj = JSON.parse(JSON.stringify(pokedex));

    // use the logic you wrote to process the pokedex data
    try {
      const result = await logic.findBy.weakness(obj.pokemon, type);

      // respond with the return value if there was no error
      res.json(result);
    } catch (err) {
      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  findByValue: async (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const value = req.params.value;
    const obj = JSON.parse(JSON.stringify(pokedex));

    // use the logic you wrote to process the pokedex data
    try {
      const result = await logic.findBy.value(obj.pokemon, value);

      // respond with the return value if there was no error
      res.json(result);
    } catch (err) {
      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
  findByKeyValue: async (req, res) => {
    // cast the user input to the correct type
    // according to the pokemon schema: ./data/schemas/pokemon.json
    const key = req.params.key;
    const value = req.params.value;
    const obj = JSON.parse(JSON.stringify(pokedex));

    // use the logic you wrote to process the pokedex data
    try {
      const result = await logic.findBy.keyValue(obj.pokemon, key, value);

      // respond with the return value if there was no error
      res.json(result);
    } catch (err) {
      // respond with 500 if there was an error
      res.status(500).send(`${err.name}: ${err.message}`);
    }
  },
};

module.exports = handlers;
