//     let current = undefined, longest = [];
for (let i = 0; i < A.length; i++) {
  current = A[i];
  let j = 0;
  while (j < 3) {
    if (longest[j] === undefined || current > longest[j]) {
      current = [longest[j], longest[j] = current][0];
    }
    j++;
  }
}


if ((longest[1] + longest[2]) > longest[0]) {
  return longest[0] + longest[1] + longest[2];
} else return 0;
// not working

var largestPerimeter = function (A) {
  function checkValid(array) {
    if (array[0] + array[1] > array[2]) return true;
    else return false;
  }
  let sorted = A.sort(function (a, b) {
    return a - b
  });
  let edges = sorted.slice(0, 3);
  let max = 0;

  if (checkValid(edges)) {
    max = edges.reduce(function (total, current) {
      return total + current
    }, 0);
  }

  for (let i = 3; i < A.length; i++) {
    let previous = edges.shift();
    edges.push(A[i]);
    if (checkValid(edges)) {
      max = edges.reduce(function (total, current) {
        return total + current
      }, 0);
    }
  }

  return max;
};
// working, large datasets might be a problem