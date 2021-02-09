const tail = require("../tail");
const assertEqual = require("../assertEqual")

console.log(tail([1, 2, 3, 4, 5]));
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result, ["Lighthouse", "Labs"]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log("tail,", tail(words));
