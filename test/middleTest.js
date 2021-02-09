const assert = require('chai').assert;
const middle = require("../middle.js")
console.log(middle([1,2,3,4]));


describe("#middle", () => {
    it("returns 2 for [1, 2, 3]", () => {
      assert.deepEqual(middle([1, 2, 3]), [2]);
    });
    it("returns [] for ['5']", () => {
      assert.deepEqual(middle(['5']), []); 
    });
    it("returns ['Lighthouse'] for [['Hello', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"])
    });
    it("returns [2, 3] for [1, 2, 3, 4]", () => {
        assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    });
});
  
