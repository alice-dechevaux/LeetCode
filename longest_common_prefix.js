//03/22/2024

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

 

// Constraints:

//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lowercase English letters.

var longestCommonPrefix = function(strs) {
    let result = "";
    let char;
    let match = true;
    if (strs.length === 1) return strs[0];
    let j = 0;
    while (match) {
        for (let i = 0; i < strs.length - 1; i++) {
            if (strs[i][j] && strs[i][j] === strs[i + 1][j]) {
                char = strs[i][j];
                match = true;
            }
            else {
                match = false;
                break;
            }

        }
        if (match) {
            result += char; j++;
        }
        else break;
    }
    return result;
};