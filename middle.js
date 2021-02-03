const assertArraysEqual = function(array1, array2){
    for (let i = 0; i < array1.length; i++){
        if (array1[i] !== array2[i]) {
         console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !==  ${expected}`);
        }
      }
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  }

  const middle = function (array){
    if (array.length === 1 || array.length === 2){
        return [];
    }
    if (array.length % 3 === 0){
        let middleIndex = (array.length - 1)/ 2
        return [array[middleIndex]]
    }else {
        let middleIndex = Math.ceil((array.length - 1) / 2);
        console.log(middleIndex);
        return [array[middleIndex], array[middleIndex + 1]]
    }
  }

  console.log(middle([1,2,3,4]));