const isEqual = require("lodash").isEqual;

const valuesForKey = (pokeArray, key) => {
  let result = [];
  for (let pokemon of pokeArray) {
    if (!result.includes(pokemon[key]) && pokemon[key] !== undefined) {
      result.push(pokemon[key]);
    }
  }
  return result;
};

module.exports = valuesForKey;
