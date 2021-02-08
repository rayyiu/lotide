const countLetters = function(string){
    let result = {}
    for (const letter of string) {
        console.log(result[letter]);
        if (result[letter]){
            result[letter] += 1
         }else {
         result[letter] = 1
    }
    }
    return result;
}


console.log(countLetters("Lighthouse"));