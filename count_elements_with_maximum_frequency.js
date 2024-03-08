//03/08/2024

// You are given an array nums consisting of positive integers.

// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

// The frequency of an element is the number of occurrences of that element in the array.
 
// Constraints:

//     1 <= nums.length <= 100
//     1 <= nums[i] <= 100

//PREP

//P: The function takes as input an array of positive integers. Will the array ever be empty? Will it ever not be an array? Will it ever contain anything other than positive integers?

//R: The function should return a number representing the number of elements in the array with the maximum frequency 

//E:

// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.

// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.

//P: First creating a counts object using a forEach loop. Then use Object.values to find the maximum count. Then use a for in loop to iterate through the object and add the maximum value to a total variable each time it's encountered. Then return the total 

var maxFrequencyElements = function(nums) {
    let total = 0;
    let counts = {};
    nums.forEach((x) => counts[x] = (counts[x] || 0) + 1);
    const max = Math.max(...Object.values(counts));
    for (let key in counts) {
        if (counts[key] === max) total += max;
    }
    return total;
}