// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const value = (pokeArray, value) => {
  let pokemon = pokeArray.filter((p) => {
    const myValues = Object.values(p);
    for (let el of myValues) {
      if (String(el) === value) {
        return true;
      }
    }
  });
  if (pokemon.length === 0) return null;

  pokemon = pokemon.map((p) => ({ num: p.num, name: p.name }));
  return pokemon;
};

module.exports = value;
