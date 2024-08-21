//08/21/2024

// Given a binary tree, determine if it is
// height-balanced
// .

 

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: true

// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false

// Example 3:

// Input: root = []
// Output: true

 

// Constraints:

//     The number of nodes in the tree is in the range [0, 5000].
//     -104 <= Node.val <= 104

var isBalanced = function(root) {
    let isBalanced = true;

    function findMaxDepth(root) {
        if (root === null) return 0;

        else {
            let leftDepth = findMaxDepth(root.left);
            let rightDepth = findMaxDepth(root.right);

            if (Math.abs(leftDepth - rightDepth) > 1) isBalanced = false;
            return Math.max(leftDepth, rightDepth) + 1;
        }
    }
    findMaxDepth(root);
    return isBalanced;
};