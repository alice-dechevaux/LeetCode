//04/16/2024

// You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.

// Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.

// As a reminder, any shorter prefix of a string is lexicographically smaller.

//     For example, "ab" is lexicographically smaller than "aba".

// A leaf of a node is a node that has no children.

 

// Example 1:

// Input: root = [0,1,2,3,4,3,4]
// Output: "dba"

// Example 2:

// Input: root = [25,1,3,1,3,0,2]
// Output: "adz"

// Example 3:

// Input: root = [2,2,1,null,1,0,null,0]
// Output: "abc"

 

// Constraints:

//     The number of nodes in the tree is in the range [1, 8500].
//     0 <= Node.val <= 25

var smallestFromLeaf = function(root) {
    const alphabet = ["a", "b", "c", "d", "e" , "f", "g", "h", "i", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let strings = [];

    function scanTree(node, string) {
        if (!node) return;
        if (!node.left && !node.right) {
            string += alphabet[node.val];
            strings.push(string.split("").reverse().join(""));
            return;
        }
        scanTree(node.left, string + alphabet[node.val]);
        scanTree(node.right, string + alphabet[node.val]);
    }
    scanTree(root, "");
    let smallest = strings[0];
    for (let i = 1; i < strings.length; i++) {
        if (strings[i] < smallest) smallest = strings[i];
    }
    return smallest;
};