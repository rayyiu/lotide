const assertArraysEqual = require("./assertArraysEqual.js")

const middle = function (array){
  if (array.length === 1 || array.length === 2){
    return [];
    }
    if (array.length % 3 === 0){
        let middleIndex = (array.length - 1)/ 2
        return [array[middleIndex]]
    }else {
        let middleIndex = Math.ceil((array.length - 1) / 2);
        //console.log(middleIndex);
        return [array[middleIndex], array[middleIndex + 1]]
    }
  }

  module.exports = middle;
  