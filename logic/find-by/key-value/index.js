// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const keyValue = (pokeArray, key, value) => {
  const arr = [];
  pokeArray.forEach((element) => {
    if (key == "id") {
      value = parseInt(value);
    }
    if (element[key] === value) {
      arr.push({ num: element.num, name: element.name });
    }
  });
  if (arr.length === 0) {
    return null;
  }
  return arr;
};

module.exports = keyValue;
