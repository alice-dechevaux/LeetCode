//09/06/2024

// A binary tree is uni-valued if every node in the tree has the same value.

// Given the root of a binary tree, return true if the given tree is uni-valued, or false otherwise.

 

// Example 1:

// Input: root = [1,1,1,1,1,null,1]
// Output: true

// Example 2:

// Input: root = [2,2,2,5,2]
// Output: false

 

// Constraints:

//     The number of nodes in the tree is in the range [1, 100].
//     0 <= Node.val < 100

var isUnivalTree = function(root) {
    let value = root.val;
    let result = true;

    function traverse(node) {
        if (!node) return;

        if (node.val !== value) result = false;

        traverse(node.left);
        traverse(node.right);
    }

    traverse(root);

    return result;
};