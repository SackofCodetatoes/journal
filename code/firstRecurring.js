// Given a string, return the first recurring character in it, or null if there is no recurring character.
// For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

function recurring(str){
  let count = {};
  for(let i = 0; i < str.length; i++){
    if(count[str[i]]) return str[i];
    else count[str[i]] = 1; 
  }
  return null;
}

console.log(recurring("acbbac") === 'b')
console.log(recurring("abcdef") === null)
console.log(recurring("") === null)
