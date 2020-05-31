const typeStats = (pokeArray, type) => {
  let obj = {};
  let typeCount = 0;
  let weaknessCount = 0;
  pokeArray.forEach((item) => {
    if (item.type.includes(type)) {
      typeCount++;
    }
    if (item.weaknesses.includes(type)) {
      weaknessCount++;
    }
  });
  obj = { typeCount: typeCount, typeName: type, weaknessCount: weaknessCount };
  return obj;
};

module.exports = typeStats;
