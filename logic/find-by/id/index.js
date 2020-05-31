const id = (pokeData, id) => {
  let obj = {};
  pokeData.forEach((item) => {
    if (item.id === id) {
      // console.log(item);
      obj = item;
    }
  });
  if (JSON.stringify(obj) === JSON.stringify({})) {
    obj = null;
  }
  return obj;
};
module.exports = id;
