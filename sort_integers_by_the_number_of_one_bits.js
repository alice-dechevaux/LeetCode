//03/18/2024

// You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

// Return the array after sorting it.

// Constraints:

//     1 <= arr.length <= 500
//     0 <= arr[i] <= 104

//PREP

//P: The function takes as input an array of integers. Will it ever not be an array? Will it ever be empty? WIll it ever contain anything other than integers?

//R: The function should return the same array sorted according to the given conditions

//E:  

// Example 1:

// Input: arr = [0,1,2,3,4,5,6,7,8]
// Output: [0,1,2,4,8,3,5,6,7]
// Explantion: [0] is the only integer with 0 bits.
// [1,2,4,8] all have 1 bit.
// [3,5,6] have 2 bits.
// [7] has 3 bits.
// The sorted array by bits is [0,1,2,4,8,3,5,6,7]

// Example 2:

// Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]
// Output: [1,2,4,8,16,32,64,128,256,512,1024]
// Explantion: All integers have 1 bit in the binary representation, you should just sort them in ascending order.

//P: Use array.sort. Convert each number to a binary string then split it at the ones and calculate the length - 1. Use the result of that calculation as the sorting parameter. Use the or operator to sort by numerical value in the case of equal values in the first sorting method

var sortByBits = function(arr) {
    return arr.sort((a, b) => (a.toString(2).split("1").length - 1) -
        (b.toString(2).split("1").length - 1) ||
        a - b)
};