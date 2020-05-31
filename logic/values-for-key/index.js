const isEqual = require("lodash").isEqual;

const valuesForKey = (pokeArray, key) => {
  // let result = [];
  const arr = [];
  pokeArray.forEach((item) => {
    if (
      !isEqual(arr[arr.indexOf(item[key])], item[key]) &&
      item[key] !== undefined
    ) {
      arr.push(item[key]);
    }
  });

  return arr;
};

module.exports = valuesForKey;
