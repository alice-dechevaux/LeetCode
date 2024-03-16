// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


var isPalindrome = function(x) {
    return x.toString() === x.toString().split("").reverse().join("");
};

//Here is a solution that works without converting the number to a string:

var isPalindrome = function(x) {
    if (x < 0 || (x!== 0 && x % 10 === 0)) return false;
    let half = 0;
    while (x > half) {
        half = (half * 10) + (x % 10);
        x = Math.floor(x/10);
    }
    return x === half || x === Math.floor(half/10);
};

//The logic here is to reverse the second half of the digits using the modulo operator. First we check to see if the number is negative or a multiple of ten and return false if so. Then we use a while loop to split the number into two halves. The first time the loop runs the half variable becomes equal to the last digit of x and then the last digit gets removed from x. Then with each successive iteration the half variable is multiplied by ten, which moves the previous last digit over by one place, and the new last digit is added to the end of half and removed from the end of x. This continues until half is greater than or equal to x. If the number is palindromic x will always equal half at some point. But sometimes it happens mid loop. So the return statement first checks for equality between x and half then checks to see if they would be equal if an additional half of the loop were performed. 