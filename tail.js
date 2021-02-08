const assertEqual = require('./assertEqual')
console.log('yay')
  
const head = function(array) {
  return array[0];
};

const tail = function(array) {
  let tail = [];
  for (let i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
};

console.log(tail([1, 2, 3, 4, 5]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result, ["Lighthouse", "Labs"]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log("tail,", tail(words));

assertEqual(words.length, 3);

module.export = tail;