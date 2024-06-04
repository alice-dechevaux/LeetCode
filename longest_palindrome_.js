//06/04/2024

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest
// palindrome
//  that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

 

// Constraints:

//     1 <= s.length <= 2000
//     s consists of lowercase and/or uppercase English letters only.

var longestPalindrome = function(s) {
    let total = 0; 
    const counts = {}, odds = [];

    for (let i = 0; i < s.length; i++) {
        counts[s[i]] = (counts[s[i]] || 0) + 1;
    }

    if (Object.keys(counts).length === 1) return s.length;

    for (let count in counts) {
        if (counts[count] % 2 === 0) total += counts[count];
        else (odds.push(counts[count]));
    }
    if (odds.length) {
        for (let i = 0; i < odds.length; i++) {
            total += odds[i] - 1;
        }
        total++;
    }


    return total;
};