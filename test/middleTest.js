const assertArraysEqual = require("./assertArraysEqual.js");
const middle = require("./middle.js")
console.log(middle([1,2,3,4]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]));

