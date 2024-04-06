//04/05/2024

// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

 

// Example 1:

// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.

// Example 2:

// Input: arr = [1,2,34,3,4,5,7,23,12]
// Output: true
// Explanation: [5,7,23] are three consecutive odds.

 

// Constraints:

//     1 <= arr.length <= 1000
//     1 <= arr[i] <= 1000

var threeConsecutiveOdds = function(arr) {
    const n = arr.length - 2;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 && arr[i + 1] % 2 && arr[i + 2] % 2) return true;
    }
    return false;
};

//or 

var threeConsecutiveOdds = function(arr) {
    const n = arr.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2) count++;
        else count = 0;
        if (count === 3) return true;
    }
    return false;
};