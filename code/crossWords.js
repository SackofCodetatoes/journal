// given a rectangluar board of words, return how many instances of word appears on the board in 
// horizontal, diagnol, and vertical
function crossWords(board, word) {
  let vertical = "";
  let diagnol = "";
  let count = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      diagnol = "";
      vertical = "";
      if (board[i].slice(j, j + word.length).join('') === word) count++;

      for (let k = i; k < board.length; k++) {
        vertical = vertical + board[k][j];
      }
      if (vertical === word) count++;

      for (let l = 0; l < word.length; l++) {
        if (i + l < board.length && j + l < board[i].length) {
          diagnol = diagnol + board[i + l][j + l];
        } else break;
      }
      if (diagnol === word) count++;

    }
  }

  return count;
}

let board = [
  ['s', 'o', 's', 'o'],
  ['s', 'o', 'o', 'o'],
  ['o', 'o', 's', 'o']
];
let word = 'sos';

console.log(crossWords(board, word))
//epxects 3


// Given integer array representing ribbon lengths and integer k, return maximum length of ribbons that can be cut to form k ribbons
// ex: i = [1,2,3,4,9], k = 5,
// max length = 3. 
// explaination: 9 can be split into 3 parts of length 3, 4 can be cut to 3, and we use prexisting 3 to form 5 ribbons of length 3;



