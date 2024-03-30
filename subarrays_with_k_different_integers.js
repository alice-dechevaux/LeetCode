//03/30/2024

// Given an integer array nums and an integer k, return the number of good subarrays of nums.

// A good array is an array where the number of different integers in that array is exactly k.

//     For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.

// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [1,2,1,2,3], k = 2
// Output: 7
// Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]

// Example 2:

// Input: nums = [1,2,1,3,4], k = 3
// Output: 3
// Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].

 

// Constraints:

//     1 <= nums.length <= 2 * 104
//     1 <= nums[i], k <= nums.length

const subarraysWithKDistinct = function(nums, k) {
    return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1);
};

const atMostKDistinct = function (nums, k) {
    let count = new Array(nums.length + 1).fill(0), left = 0, right = 0, 
    distinct = 0, total = 0;
    const n = nums.length;

    while (right < n) {
        if (count[nums[right]] === 0) distinct++;
        count[nums[right]]++;

        while (distinct > k) {
            count[nums[left]]--;
            if (count[nums[left]] === 0) distinct--;
            left++;
        }
        total += right - left + 1;
        right++;
    }
    return total;
};