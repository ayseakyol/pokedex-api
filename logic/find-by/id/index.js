const id = (pokeData, id) => {
  const pokemon = pokeData.find((p) => p.id === id);
  if (!pokemon) return null;
  return pokemon;
};
module.exports = id;
