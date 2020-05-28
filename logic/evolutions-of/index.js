const evolutionOf = (pokeArray, name) => {
  const pokemon = pokeArray.find((p) => p.name === name);
  if (!pokemon) return null;
  const allEvolutions = [];
  if (Array.isArray(pokemon.prev_evolution)) {
    allEvolutions.push(...pokemon.prev_evolution);
  }
  allEvolutions.push({ num: pokemon.num, name: pokemon.name });
  if (Array.isArray(pokemon.next_evolution)) {
    allEvolutions.push(...pokemon.next_evolution);
  }
  return allEvolutions;
};

module.exports = evolutionOf;

/*
  return an array with all evolutions of a pokemon, including itself:

    [
      { "num": "007", "name": "Squirtle" },
      { "num": "008", "name": "Wartortle" },
      { "num": "009", "name": "Blastoise" }
    ]

  if a pokemon does not exist in the pokeArray, return null

    null

  read the ./spec.js file & study the data samples for a better understanding
*/
