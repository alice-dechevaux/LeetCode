//04/03/2024

// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

 

// Constraints:

//     m == board.length
//     n = board[i].length
//     1 <= m, n <= 6
//     1 <= word.length <= 15
//     board and word consists of only lowercase and uppercase English letters.

var exist = function(board, word) {
    const m = board.length, n = board[0].length;

    const search = (i, j, k) => {
        if (k === word.length) {
            return true;
        }
        if (i < 0 || i >= m || 
            j < 0 || j >= n || 
            board[i][j] !== word.charAt(k)) {
                return false;
            }
        
        const temp = board[i][j];
        board[i][j] = "\0";

        const result = search (i + 1, j, k  + 1) ||
                       search (i - 1, j, k  + 1) ||
                       search (i, j + 1, k  + 1) ||
                       search (i, j - 1, k  + 1);

                       board[i][j] = temp;
                       return result;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (search(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}