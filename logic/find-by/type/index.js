const type = (pokeArray, type) => {
  const arr = [];
  pokeArray.forEach((element) => {
    if (element["type"][0] === type) {
      arr.push({ name: element.name, num: element.num });
    }
  });
  if (arr.length === 0) {
    return null;
  }

  return arr;
};

module.exports = type;
