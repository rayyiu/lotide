const assertArraysEqual = function(array1, array2){
    for (let i = 0; i < array1.length; i++){
        if (array1[i] !== array2[i]) {
         console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
        }
      }
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  }
