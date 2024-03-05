//03/05/2024

// A string is a valid parentheses string (denoted VPS) if it meets one of the following:

//     It is an empty string "", or a single character not equal to "(" or ")",
//     It can be written as AB (A concatenated with B), where A and B are VPS's, or
//     It can be written as (A), where A is a VPS.

// We can similarly define the nesting depth depth(S) of any VPS S as follows:

//     depth("") = 0
//     depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
//     depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
//     depth("(" + A + ")") = 1 + depth(A), where A is a VPS.

// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

// Given a VPS represented as string s, return the nesting depth of s.

//PREP

//P: The function takes as input a string. Input will always be valid and will always contain matched pairs of parentheses

//R: The function should return a number representing the maximum nesting depth of the parentheses in the inputted string 

//E: Example 1:

//   Input: s = "(1+(2*3)+((8)/4))+1"
//   Output: 3
//   Explanation: Digit 8 is inside of 3 nested parentheses in the string.

//   Example 2:

//   Input: s = "(1)+((2))+(((3)))"
//   Output: 3

//P: Iterate through the string using a for loop. Each time an opening parenthesis is encountered, increment a depth variable. Then compare it to a max depth variable. If the current depth is greater than the max depth variable, update it. Decrement the current depth each time a closing parenthesis is found. Once the loop terminates, return max depth.

var maxDepth = function(s) {
    let currentDepth = 0;
    let maxDepth = 0;
    s.split("").forEach((x) => {
        if (x === "(") {
            currentDepth++;
            if (currentDepth > maxDepth) maxDepth = currentDepth;
        }
        if (x === ")") currentDepth--;
    }); 
    return maxDepth;
};

//fastest solution

var maxDepth = function(s) {
    let count = 0;
    let maxCount = 0;
    for(let i=0;i<s.length-1;i++){
        if(s[i] === "(" ) {
            count++;
        }else if(s[i] === ")"){
            count--;
        }else{
            continue;
        }
        maxCount = Math.max(maxCount,count);
    }
    return maxCount;
};

//It seems like the most meaningful difference with this solution is skipping the final index instead of iterating through the entire string. When I changed everything else to make it the same as my code it was still faster
