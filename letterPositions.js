const letterPositions = function(sentence) {
    const results = {}
    for (let i = 0; i < sentence.length; i++){
        if (results[sentence[i]]){
            results[sentence[i]].push(i);
        }else {
            results[sentence[i]] = [i]
        }
    }
//results will be the letter as the key and an array with its index(s)
    return results;
}


const assertArraysEqual = function(array1, array2){
    for (let i = 0; i < array1.length; i++){
        if (array1[i] !== array2[i]) {
         console.log(`🛑🛑🛑 Assertion Failed: ${array1}  !==  ${array2}`);
        }
      }
    console.log(`✅✅✅ Assertion Passed: ${array1}  === ${array2}`);
  }

  module.exports = letterPositions;