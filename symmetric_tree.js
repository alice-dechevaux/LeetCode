//08/14/2024

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false

 

// Constraints:

//     The number of nodes in the tree is in the range [1, 1000].
//     -100 <= Node.val <= 100

 
// Follow up: Could you solve it both recursively and iteratively?

var isSymmetric = function(root) {
    let left = traverseTree(root.left, []);
    let right = traverseTree(root.right, []);

    console.log(left, right)
};

var isSymmetric = function(root) {
    if (!root)
        return true;

    return isSame(root.left, root.right);
};

var isSame = function (leftroot, rightroot) {
    if ((!leftroot && rightroot) || (leftroot && !rightroot) || (leftroot && rightroot && leftroot.val !== rightroot.val))
        return false;

    if (leftroot && rightroot)
        return isSame(leftroot.left, rightroot.right) && isSame(leftroot.right, rightroot.left);
    return true;
};