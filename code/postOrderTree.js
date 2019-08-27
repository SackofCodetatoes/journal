// Given a post order traversal sequence of a binary search tree, reconstruct the tree returning the root node.

// 1) Recursive approach
  // Last element in array will always be root. create root Node, search for index seperating left and right subtree elements. 
  // Current root.left = pot(arr (0 to index))
  // Current.right = pot(index to n-2)
  // Runtime = n^2

// function CreateTree(arr)
// if arr.empty, return null
// let root = new Node(arr.last)
// let i = 0;
// while (arr[i] < root.val) i++;
// root.left = CreateTree(arr[0...i])
// root.right = createTree(arr[i...n-2])
// return root
//





