const reverse = function(string){ 
  console.log(string)
  let newString = ""
  for (i = string.length - 1; i >= 0; i --){
    newString += string[i];
  }
  let final = newString.split(' ')
  return final
};

console.log(reverse("string number 1"));
module.exports = reverse;