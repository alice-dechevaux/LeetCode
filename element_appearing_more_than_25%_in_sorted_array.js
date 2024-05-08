//05/08/2024

// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6

// Example 2:

// Input: arr = [1,1]
// Output: 1

// Constraints:

//     1 <= arr.length <= 104
//     0 <= arr[i] <= 105

var findSpecialInteger = function(arr) {
    let current, count;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === current) count++;
        else {
            current = arr[i];
            count = 1
        }
        if (count/arr.length > .25) return current;
    }
};