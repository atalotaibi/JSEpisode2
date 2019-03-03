/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns []
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns []
 ****************************************************************/
function pairs(names) {
  // Your code goes here

  // let arr2 = [];
  // let name1 = " ";
  // let name2 = " ";

  // if (names === []) {
  //   return [];
  // } else if (names === undefined) {
  //   return [];
  // } else if (names.length % 2 !== 0) {
  //   for (let i = 0; i < names.length; i++) {
  //     name1 = names.getRandom();
  //     name2 = names.getRandom();
  //     arr2.push([name1, name2]);
  //   }
  //   arr2.push(names);
  // } else {
  //   for (let i = 0; i < names.length; i++) {
  //     name1 = names.getRandom();
  //     name2 = names.getRandom();
  //     arr2.push([name1, name2]);
  //   }
  // }
  // return arr2;
  let pairsGenerated = [];
  if (names) {
    while (names.length > 1) {
      pairsGenerated.push([names.getRandom(), names.getRandom()]);
    }
    if (names.length === 1) {
      pairsGenerated.push([names[0]]);
    }

    console.log(pairsGenerated);
    names.forEach(name => console.log(name));
    return pairsGenerated;
  } else {
    return [];
  }
}

module.exports = pairs;

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 *
 * let numbers = [1, 2, 3, 4];
 * let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
 * console.log(random); // 3 (the random element)
 * console.log(numbers);  // [1, 2, 4] (missing the random element)
 ************************************************/
Array.prototype.getRandom = function() {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

console.log(
  pairs(["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz", "Mr Potato"])
);
