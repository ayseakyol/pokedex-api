// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const value = (pokeArray, value) => {
  const arr = [];
  if (value === "None") {
    pokeArray.forEach((element) => {
      if (
        !element.hasOwnProperty("prev_evolution") &&
        !element.hasOwnProperty("next_evolution")
      ) {
        const newItem = { name: element.name, num: element.num };
        arr.push(newItem);
      }
    });
  }
  if (value === "null") {
    pokeArray.forEach((element) => {
      if (!element.hasOwnProperty("next_evolution")) {
        const newItem = { name: element.name, num: element.num };
        arr.push(newItem);
      }
    });
  }
  pokeArray.forEach((element) => {
    for (let key in element) {
      if (element[key] == parseInt(value)) {
        const newItem = { name: element.name, num: element.num };
        arr.push(newItem);
      }
    }
  });
  arr.forEach((item1) => {
    let i = 0;
    arr.forEach((item2) => {
      if (isEqual(item2, item1)) {
        i++;
      }
    });
    if (i > 1) {
      arr.splice(arr.indexOf(item1), 1);
    }
  });
  if (arr.length === 0) {
    return null;
  }

  return arr;
};

module.exports = value;
