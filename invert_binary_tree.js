//08/23/2024

// Given the root of a binary tree, invert the tree, and return its root.

 

// Example 1:

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:

// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:

// Input: root = []
// Output: []

 

// Constraints:

//     The number of nodes in the tree is in the range [0, 100].
//     -100 <= Node.val <= 100

var invertTree = function(root) {

    traverse(root);
    return root;

    function traverse(root) {
        if (root === null) return;
        if (root.left === null & root.right === null) return;

        let temp = root.left;
        root.left = root.right;
        root.right = temp;

        traverse(root.left);
        traverse(root.right);
    }
};