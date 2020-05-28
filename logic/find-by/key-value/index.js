// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const keyValue = (pokeArray, key, value) => {
  let pokemon = pokeArray.find((p) => p[key]);
  if (!pokemon) return null;

  if (typeof pokemon[key] === "number") {
    value = Number(value);
  }
  let results = pokeArray.filter((p) => p[key] === value);
  if (results.length === 0) return null;
  results = results.map((p) => ({ name: p.name, num: p.num }));
  return results;
};

module.exports = keyValue;
