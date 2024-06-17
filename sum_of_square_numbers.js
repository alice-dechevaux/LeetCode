//06/17/2024

// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

 

// Example 1:

// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5

// Example 2:

// Input: c = 3
// Output: false

 

// Constraints:

//     0 <= c <= 231 - 1

var judgeSquareSum = function(c) {
    let s = new Map();
    for (let i = 0; i * i <= c; ++i){
        s.set(i * i, 1);
        if (s.has(c - i * i))
        {
            return true;
        }
    }
    return false;
};