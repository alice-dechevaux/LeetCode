//03/12/2024

// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]

// Example 2:

// Input: rowIndex = 0
// Output: [1]

// Example 3:

// Input: rowIndex = 1
// Output: [1,1]

// Constraints:

//     0 <= rowIndex <= 33


var getRow = function(rowIndex) {
    triangle = [[1], [1, 1]];
    for (let i = 2; i <= rowIndex; i++) {
        triangle[i] = [1];
        for (let j = 0; j < triangle[i - 1].length - 1; j++) {
            triangle[i].push(triangle[i - 1][j] + triangle[i - 1][j + 1]);
        }
        triangle[i].push(1);
    }    
    return triangle[rowIndex];
};