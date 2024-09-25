//09/25/2024

// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

 

// Example 1:

// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true

// Example 2:

// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false

 

// Constraints:

//     The number of nodes in the tree is in the range [1, 104].
//     -104 <= Node.val <= 104
//     root is guaranteed to be a valid binary search tree.
//     -105 <= k <= 105

var findTarget = function(root, k) {
    let values = [];

    function traverse(node) {
        if (!node) return;
        values.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);

    for (let i = 0; i < values.length - 1; i++) {
        for (let j = i + 1; j < values.length; j++) {
            if (values[i] + values[j] === k) return true;
        }
    }
    return false;
};