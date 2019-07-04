function asteroids(arr){
  let stack = [];
  for(let i = 0; i < arr.length;){
    if(!stack.length || Math.sign(arr[i]) == Math.sign(stack[stack.length - 1])){
      stack.push(arr[i]);
      i++;
    } 
    else if(arr[i] < 0){
      if(stack[stack.length - 1] > Math.abs(arr[i])){
        i++;
      }
      else stack.pop();
    }
    else {
      stack.push(arr[i]);
      i++;
    }
  }
  return stack;
}

let test1 = asteroids([10, 5, -3, -6]);
console.log(test1.join() == [10].join())
let test2 = asteroids([-4,5]);
console.log(test2.join() == [-4, 5].join())
let test3 = asteroids([10, 5, -5, 3])
console.log(test3.join() == [10, 3].join())
let test4 = asteroids([10, 5, 5, 3])
console.log(test4.join() == [10,5,5,3].join())


// [10, 5, -3, -6]
// [-4, 5]
// [10, 5, -5, 3]
