// Given an Array, return the longest subarray of distinct values
// ex: arr = [5,1,3,5,2,3,4,1] returns [5,2,3,4,1]

function longestSubArray(arr){
  let longest = [];
  let cur = [];
  let count = {};
  let shifted;
  for(let i = 0; i < arr.length; i++){
    if(cur.includes(arr[i])){
      while(cur.shift() !== arr[i]);
    }
    
    cur.push(arr[i]);
    
    if(cur.length > longest.length){
      longest = cur.slice();
    }
  }
  return longest;
}

// console.log(longestSubArray([5,1,3,5,2,3,4,1]).join("") == "5,2,3,4,1"  )
let result = longestSubArray([5, 1, 3, 5, 2, 3, 4, 1])
console.log(result.join('') === "52341")
result = longestSubArray([1,3,1,4,7])
console.log(result.join('') === "3147")