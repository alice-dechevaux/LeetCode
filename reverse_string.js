//06/02/2024

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

 

// Constraints:

//     1 <= s.length <= 105
//     s[i] is a printable ascii character.

var reverseString = function(s) {
    const mid = Math.floor(s.length / 2);
    for (let i = 0, j = 1; i < mid; i++, j++) {
        let temp = s[i];
        s[i] = s[s.length - j];
        s[s.length - j] = temp;
    }
    return s;
};