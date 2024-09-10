//09/10/2024

// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

 

// Example 1:

// Input: root = [4,2,6,1,3]
// Output: 1

// Example 2:

// Input: root = [1,0,48,null,null,12,49]
// Output: 1

 

// Constraints:

//     The number of nodes in the tree is in the range [2, 100].
//     0 <= Node.val <= 105

var minDiffInBST = function(root) {
    const values = [];
    let minDiff = Infinity;

    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        values.push(node.val);
        traverse(node.right);
    }

    traverse(root);

    for (let i = 0; i < values.length - 1; i++) {
            minDiff = Math.min(Math.abs(values[i] - values[i + 1]), minDiff);
        }

    return minDiff;
};