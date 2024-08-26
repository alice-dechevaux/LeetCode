//08/26/2024

// Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

// Example 1:

// Input: root = [4,2,6,1,3]
// Output: 1

// Example 2:

// Input: root = [1,0,48,null,null,12,49]
// Output: 1

 

// Constraints:

//     The number of nodes in the tree is in the range [2, 104].
//     0 <= Node.val <= 105

var getMinimumDifference = function(root) {
    let numbers = [];

    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        numbers.push(node.val);
        traverse(node.right);
    }
    
    traverse(root);
    
    let minimum = Infinity;

    for (let i = 0; i < numbers.length - 1; i++) {
        if (Math.abs(numbers[i] - numbers[i + 1]) < minimum) {
            minimum = Math.abs(numbers[i] - numbers[i + 1]);
        }
    }
    return minimum;
};