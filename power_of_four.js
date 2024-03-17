//03/17/2024

// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

// Constraints:

//     -231 <= n <= 231 - 1
 
// Follow up: Could you solve it without loops/recursion?

//PREP

//P: The function takes as input an integer. The number may be negative. Will it ever not be a number?

//R: The function should return true or false depending on whether or not the inputted number is a power of 4

//E:  

// Example 1:

// Input: n = 16
// Output: true

// Example 2:

// Input: n = 5
// Output: false

// Example 3:

// Input: n = 1
// Output: true

//P: Create a variable and set it equal to 1. Then use a while loop to multiply the number by 4 until it's no longer less than the inputted number. Then check to see if the two numbers are equal 


var isPowerOfFour = function(n) {
    let x = 1;
    while (x < n) {
        x *= 4;
    }
    return x === n;
};

//This solution tests to see whether the result of dividing log n by log 4 is a whole number. If so, the result is true. I don't entirely understand the math behind this but I did some searching online and figured out that this is how it works 

var isPowerOfFour = function(n) {
    if (n === 0) return false;
    return Math.log(n) / Math.log(4) === Math.floor(Math.log(n) / Math.log(4));
};