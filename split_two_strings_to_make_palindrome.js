//03/07/2024

// You are given two strings a and b of the same length. Choose an index and split both strings at the same index, splitting a into two strings: aprefix and asuffix where a = aprefix + asuffix, and splitting b into two strings: bprefix and bsuffix where b = bprefix + bsuffix. Check if aprefix + bsuffix or bprefix + asuffix forms a palindrome.

// When you split a string s into sprefix and ssuffix, either ssuffix or sprefix is allowed to be empty. For example, if s = "abc", then "" + "abc", "a" + "bc", "ab" + "c" , and "abc" + "" are valid splits.

// Return true if it is possible to form a palindrome string, otherwise return false.

// Notice that x + y denotes the concatenation of strings x and y.

// Constraints:

//     1 <= a.length, b.length <= 105
//     a.length == b.length
//     a and b consist of lowercase English letters

//PREP

//P: The function takes as input two strings of equal length containing lowercase English letters. Will input ever not be strings? Will the strings ever be empty?

//R: The function should return true or false depending on whether the two strings can be split at the same index and joined to form a palindrome 

//E: 

// Example 1:

// Input: a = "x", b = "y"
// Output: true
// Explaination: If either a or b are palindromes the answer is true since you can split in the following way:
// aprefix = "", asuffix = "x"
// bprefix = "", bsuffix = "y"
// Then, aprefix + bsuffix = "" + "y" = "y", which is a palindrome.

// Example 2:

// Input: a = "xbdef", b = "xecab"
// Output: false

// Example 3:

// Input: a = "ulacfd", b = "jizalu"
// Output: true
// Explaination: Split them at index 3:
// aprefix = "ula", asuffix = "cfd"
// bprefix = "jiz", bsuffix = "alu"
// Then, aprefix + bsuffix = "ula" + "alu" = "ulaalu", which is a palindrome.

//P: First check to see if either inputted string is a palindrome on its own and return true if so. Then iterate through both strings, split them using .slice, and check to see if the first is equal to the reverse of the second. Return true if a palindrome is found and false if the loop terminates.

var checkPalindromeFormation = function(a, b) {   
    if (isPalindrome(a) || isPalindrome(b)) return true;
    else {
        for (let i = 1; i < a.length; i++) {
            if (isPalindrome(a.slice(0, i) + b.slice(i)) || 
                isPalindrome(b.slice(0, i) + a.slice(i))) {
                return true;
            }
        }
        return false;
    }
};

function isPalindrome(string) {
    return string === string.split("").reverse().join("");
}

//This solution works but it times out on longer strings.

//Top solution:
abiggill gjhyhuba
var checkPalindromeFormation = function (a, b) {
    //This function checks to see if a palindrome can be formed by splitting the two strings at the middle. L and R are pointers that are incremented and decremented while l is less than r and the letters at each index are equal. Once l is greater than r, the strings can be split at the same index and joined to form a palindrome. If the letters don't match, l and r never change. If some letters match but not enough to split the strings at the same index and form a palindrome, l and r end up at the index after the matching letters on either side.
    function checkPalindrome(a, b) {
        let l = 0;
        let r = a.length - 1;
        while (l < r && a[l] === b[r]) {
            l += 1;
            r -= 1;
        }
        return isPalindrome(a, l, r) || isPalindrome(b, l, r);
    };
    //This function automatically returns true if a palindrome can be formed by splitting the strings at the middle. If no matching letters were found by the previous function it checks each string to see if it's a palindrome on its own. Otherwise it starts just after the end of the matching letters in each string and checks to see if the remainder of the string is palindromic. If one of them is, we already know the ends of the strings are also palindromic so the strings can be split at that index and joined and the result will also be a palindrome.

    function isPalindrome(str, l, r) {
        while (l < r && str[l] === str[r]) {
            l += 1;
            r -= 1;
        }
        return l >= r;
    }
    return checkPalindrome(a, b) || checkPalindrome(b, a);
};