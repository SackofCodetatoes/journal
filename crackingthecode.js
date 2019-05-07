// My Coding solutions to cracking the code interview questions

// Arrays and Strings
//1.1. implement an algorithm to determine if string has all unique characters. What if no additional ds can be used?
//two approaches, create arracy of size (all character types, 256?) or use hash objectm depending on language. Iterate over chars, mark array as true, if true, return false
//split string into characters, sort characters, return false if proceeding character is repeated
function isUnique(string) {
  //method 1, assuming characters only containing alphabet
  let seen = {};
  let allUnique = true;
  let current;
  // string.split("").forEach(letter => {
  //   if (seen[letter]) allUnique = false;
  //   seen[letter] = true;
  // });

  for(let i = 0; i < string.length; i++){
    current = string[i];
    if(seen[current]) return false;
    else seen[current] = true;
  }
  return true;
}

//1.2 Given two strings, write a method to decide if one is permutation of the other
//1. sort all letters, check if length differs and if sorted letter arrays are equal.
//2. create hashmap of letters for both words. check length and check key if values are equal. 
function isPermutation(word1, word2){
  let letters1 = {};
  let letters2 = {};
  word1.split("").forEach(letter => {
    if(letters1[letter]) letters1[letter]++;
    else letters1[letter] = 1;
  });
  word2.split("").forEach(letter => {
    if (letters2[letter]) letters2[letter]++;
    else letters2[letter] = 1;
  });

  if(Object.keys(letters1).length !== Object.keys(letters2).length) return false;
  let current;
  let letters = Object.keys(letters1);
  for(let i = 0; i < letters.length; i++){
    current = letters[i];
    if(letters1[current] !== letters2[current]) return false;
  }

  return true;
}

// 1.3 URLify -> Write a method to replace all spaces in a string with "%20" given the base string and true length of string
//itterate over string, if space, shift remaning element sof string to right. runtime O(n^2), constant space, 
//idea 2 create new string, opperates in O(n) and O(n) time and space
//optimal solution -> two pointer system, one points at end of true-length string and another points to very end of charater array.
//replace iteratitvely. if space, replace corresponding 3 slots with % 2 0 else replace with current letter
//this works for character array languages but not neccesarilyy javascript
function URLify(string, truelength){
  string = string.slice(0, truelength);
  for(let i = string.length; i >= 0; i--){
    if(string[i] === ' '){
      string = string.slice(0, i) + '%20' + string.slice(i+1, string.length);
    }
  }
  return string;
}

// 1.4 Check if palidrome, approach is itereate over all letters, create hashmap of letter count, if more than one is odd, return false
function isPalidrome(string) {
  let characters = {};
  string = string.toLowerCase().split('').filter(char => char !== ' ');
  string.forEach(char => {
    if (characters[char]) {
      characters[char] += 1;
    }
    else characters[char] = 1;
  });
  console.log(string)
  let countsArr = Object.values(characters);
  if (countsArr.filter(num => num % 2 !== 0).length > 1) return false;

  return true;
}

// 1.5 check if stsrings are one edit away
// take shorter of strings or either (if same length). itterate over indexes and and see if corresponds. keep watch of left, middle or right. 
// if char diff is greater than 1, return false. three checks, i flength isnt the same, we use shorter word and iterate over longer word, if not same, increase edits and increase larger word index
// if lengths are the same, iterate both and return false when edits greater than 1
function oneAway(string1, string2) {
  let edits = 0;
  let short, long;
  let i = 0;
  let j = 0;
  if (Math.abs(string1.length - string2.length) > 1) return false;
  if (string1.length > string2.length) {
    short = string2;
    long = string1;
  }
  else {
    short = string1;
    long = string2;
  }
  while (j < short.length) {
    if (short[j] === long[i]) {
      j++;
    }
    else {
      if (short.length === long.length) j++;
      edits++;
      if (edits > 1) return false;
    }
    i++;
  }

  return true;
}

// 1.6 string compression
// given string aabcccccaaa, compress the string. if compressed is not shorter than original, return orgiinal
// idea is to use two pointer method, cur & next. and count
//  if cur != next, append compressed with cur + count. 
//  at end, append cur and cur count
//  return compressed or string based on length
// 

function stringCompress(string) {
  let compressed = "";
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) {
      compressed = compressed + string[i] + count;
      count = 1;
    }
    else {
      count += 1;
    }
  }
  return (compressed.length < string.length) ? compressed : string;
}

// 1.9 assume method isSubString which checks if one word is a substring. given two strings s1 and s2. write code to check if s2 is rotate of s1 using only one call to isSubstring
//  find index of the first char from string2 in string1. connect remaining beginning half to end of string and check if substring to s2. 
//   duplicate string 1 with itself and check if s2 is substring with the above
// 
// 
// 


// 2.2 Return kth to last: implement an algorithm to find the kth to last eleent of a singly linked List
// two pointer approach, one moves k elements forward, and one at head. incremebt both intil k is at tail, return head
// 
function kthLast(head, k){
  let current = head;
  let kth = head;
  for(let i = 0; i < k; i++){
    kth = kth.next;
  }
  while(kth != null){
    kth = kth.next;
    current = current.next;
  }

  return current;
}
// 2.3 delete middle node given said node
// continue 
// set cur to next value
// if next.next != null, set next to that next
// 

// 2.4: Partition: Write code to parition a linked list around valu x, 
// 

// 2.5 Sum lists: two nums represented by ll in reverse order. sum them
// -> followup: what if numbers are stored in forward order
//  approach is to have a carry, sum values and if > 10, carry = 1 and mod the value, return as ll
function sumLL(num1, num2){
  let head = new Node(0);
  
  while(num1 != null && num2 != null)
}

