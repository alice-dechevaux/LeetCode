//03/25/2024

// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space. 

// Constraints:

//     n == nums.length
//     1 <= n <= 105
//     1 <= nums[i] <= n
//     Each element in nums appears once or twice.

//PREP

//P: The function takes as input an array of positive numbers. Will it ever not be an array? Will the array ever be empty? Will it ever contain anything other than numbers? Will numbers ever be decimal values?

//R: The function should return an array containing only the numbers that occur multiple times in the original array. It must run in O(n) time and use only constant memory  

//E: 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

// Example 2:

// Input: nums = [1,1,2]
// Output: [1]

// Example 3:

// Input: nums = [1]
// Output: []

//P: This solution works by iterating through the array and modifying the value at an index corresponding to the number contained in each index by multiplying it by -1. Thus, if we check the value at the corresponding index and find it to be negative, we can know that the current number has already occurred in the array and can be added to the result.

var findDuplicates = function(nums) {
    let result = [];
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        const number = Math.abs(nums[i]);
        const index = number - 1;
        if (nums[index] < 0) {
            result.push(number);
        }
        nums[index] *= -1;
    }
    return result;
};