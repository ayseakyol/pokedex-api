const typeStats = (pokeArray, type) => {
  let typeCount = 0;
  let weaknessCount = 0;
  pokeArray.map((p) => {
    if (p.type.includes(type)) {
      typeCount++;
    }
    if (p.weaknesses.includes(type)) {
      weaknessCount++;
    }
  });
  return {
    typeName: type,
    typeCount: typeCount,
    weaknessCount: weaknessCount,
  };
};

module.exports = typeStats;
