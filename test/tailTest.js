const tail = require("../tail");
const assert = require('chai').assert;

describe("#tail", () => {
    it("returns 2, 3 for [1, 2, 3]", () => {
      assert.deepEqual(tail([1, 2, 3]), [2, 3]);
    });
    it("returns [] for ['5']", () => {
      assert.deepEqual(tail(['5']), []); 
    });
    it("returns ['Lighthouse', 'Labs'] for [['Hello', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
    });
});
  



// console.log(tail([1, 2, 3, 4, 5]));
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// console.log(assertEqual(result, ["Lighthouse", "Labs"]));
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log("tail,", tail(words));
