const weakness = (pokeArray, type) => {
  let results = pokeArray.filter((p) => {
    const a = p.weaknesses;
    return a.includes(type);
  });
  if (results.length === 0) return null;
  results = results.map((p) => ({ name: p.name, num: p.num }));
  return results;
};

module.exports = weakness;
