//03/31/2024

// The array-form of an integer num is an array representing its digits in left to right order.

//     For example, for num = 1321, the array form is [1,3,2,1].

// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

 

// Example 1:

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

// Example 2:

// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455

// Example 3:

// Input: num = [2,1,5], k = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021

 

// Constraints:

//     1 <= num.length <= 104
//     0 <= num[i] <= 9
//     num does not contain any leading zeros except for the zero itself.
//     1 <= k <= 104

var addToArrayForm = function(num, k) {
    let number = "";
    for (let i = 0; i < num.length; i++) {
        number += num[i];
    }
    const result = BigInt(k) + BigInt(number);
    return result.toString().split("");
};

//Here's a more performant solution that skips joining and splitting 

var addToArrayForm = function(num = [0], k = 1000) {
    for (let i = num.length - 1; i >= 0; i--) {
        let sum = num[i] + k;
        num[i] = sum % 10;
        k = Math.floor(sum / 10);
    }

    // Handle remaining carry
    while (k > 0) {
        num.unshift(k % 10);
        k = Math.floor(k / 10);
    }

    return num;
};