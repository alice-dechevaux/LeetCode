//03/13/2024

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

 

// Constraints:

//     1 <= s.length, t.length <= 200
//     s and t only contain lowercase letters and '#' characters.

 

// Follow up: Can you solve it in O(n) time and O(1) space?



var backspaceCompare = function(s, t) {
    return backspace(s) === backspace(t);
};

function backspace(string) {
    string = string.split("");
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "#") {
            if (i > 0) {
                string.splice(i - 1, 2);
                i -= 2;
            }
            else {
                string.splice(i, 1);
                i--;
            }
        }
    }
    return string.join("");
};