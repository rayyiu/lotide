const eqArrays = require('./eqArrays')
const assertArraysEqual = function(array1, array2){
    if (eqArrays(array1, array2)){
         console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
        }else {; 
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  }
}

  module.export = assertArraysEqual;
