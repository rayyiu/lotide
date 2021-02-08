const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    const results1 = [];
    for (let item of array) {
       results1.push(callback(item))
    }
    return results1;
}

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(map([3, 4, 5, 6, 7], num => num * 7), [21, 28, 35, 42, 49])
assertArraysEqual(map(data2, x => x === ','), ["i've never been here", "where is hollywood"
assertArraysEqual(map([1, 2, 3, 4, 5], num => num % 3 === 0), [1, 3, 5, 7])



const assertArraysEqual = function(array1, array2){
    for (let i = 0; i < array1.length; i++){
        if (array1[i] !== array2[i]) {
         console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
         break;
        }
      }
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  }

  console.log(map(words, words.filter))