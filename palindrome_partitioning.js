//05/22/2024

// Given a string s, partition s such that every
// substring
// of the partition is a
// palindrome
// . Return all possible palindrome partitioning of s.

// Constraints:

//     1 <= s.length <= 16
//     s contains only lowercase English letters.

//PREP

//P: The function takes as input a string. Will the input ever not be a string? Will the string ever be emtpy?

//R: The function should return an array containing all possible palindromic partitions of the inputted string. A palindromic partition is an array that contains the entirety of the inputted string split into palindromic substrings. The substrings can be of any size and need not be of equal size

//E: 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// Example 2:

// Input: s = "a"
// Output: [["a"]]

//P: The solution to this problem will make use of two nested functions. The first will be a function to check for a palindrome. It will use dual pointers to check for the equality of characters at matching indexes on either side of the string. The pointers will move from the outer edges of the string inward until they either cross or land on the same index, returning false if ever the characters do not match and returning true if the loop completes and no mismatched characters are found. 

//The next function creates all possible partitions and submits the substrings the contain to the first function to be tested. It takes three arguments: a starting index, a path array, and a partitions array. It starts by checking to see if the starting index is beyond the length of the string, which means that the entire string has been checked. If this condition is met, a copy of the path array is pushed to the partitions array and control is handed back to the calling function. Otherwise a for loop is initiated. The incrementor is called and end and is set to the value of start + 1. The loop runs until end is equal to s.length, meaning that the entire string has been checked. A substring is created using the start and end values as arguments. Then checkForPalindrome is called with the substring as an argument. If it returns true the substring is pushed to the path array and the backtrack function is called recursively with the current end value as the new start value. This will continue until either checkForPalindrome returns false or the adjusted start value causes the end value to become greater than s.length, terminating the loop within that call to the function. If checkForPalindrome returns false the intial function call with increment the value of end and continue the for loop. If it returns true all the way to the end of the string the initial comparision of start and s.length will cause the path array to be copied to the partitions array. Then, as each recursive call to the function returns control to the previous caller, each added value is removed from the array with a call to .pop(). Now the for loop of the initial function call is incremented and parititions are created with larger substrings. Thus every possible partition is tested and, if palindromic, is pushed to the partitions array. F

//inally, the outer function declares a variable called partitions and initializes it to an empty array, calls the backtrack function with a starting value of 0, and empty path array, and the partitions array, and then returns the partitions array

var partition = function(s) {

    function checkForPalindrome(substring) {
        let left = 0, right = substring.length - 1;
        while (left < right) {
            if (substring[left] !== substring[right]) {
                return false;
            }
            left++; 
            right--;
        }
        return true;
    }

    function backtrack(start, path, partitions) {
        if (start === s.length) {
            partitions.push([...path]);
            return;
        }

        for (let end = start + 1; end <= s.length; end++) {
            const substring = s.substring(start, end);
            if (checkForPalindrome(substring)) {
                path.push(substring);
                backtrack(end, path, partitions);
                path.pop();
            }
        }
    }
    const partitions = [];
    backtrack(0, [], partitions);
    return partitions;
};