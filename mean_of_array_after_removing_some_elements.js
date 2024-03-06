//03/06/2024

// Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

// Answers within 10 ** -5 of the actual answer will be considered accepted. 

// Constraints:

//     20 <= arr.length <= 1000
//     arr.length is a multiple of 20.
//     0 <= arr[i] <= 105

//PREP

//P: The function takes as input an array of numbers with a length that will be a multiple of 20 between 20 and 1000

//R: The function should return the mean of the elements of the array after removing the top and bottom 5% of elements

//E:

//Example 1:

// Input: arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
// Output: 2.00000
// Explanation: After erasing the minimum and the maximum values of this array, all elements are equal to 2, so the mean is 2.

// Example 2:

// Input: arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]
// Output: 4.00000

// Example 3:

// Input: arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]
// Output: 4.77778

//P: First figure out how many elements need to be removed by calculating 5% of array.length. Then sort the array and pop and shift the required number of elements. Then use reduce to find the sum of the elements and divide by the remaining length

var trimMean = function(arr) {
    const numberToRemove = arr.length * .05;
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < numberToRemove; i++) {
        arr.shift();
        arr.pop();
    }
    return arr.reduce((acc, x) => acc + x, 0)/arr.length;
};