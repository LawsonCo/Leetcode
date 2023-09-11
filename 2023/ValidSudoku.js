/**
 * @param {character[][]} board
 * @return {boolean}
 * 
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 */
function validSoduku(board) {
    let horizontals = []
    let verticals = []
    let squares = {}
    for (verticalIndex = 0; verticalIndex < board.length; verticalIndex++) {
        for (horizontalIndex = 0; horizontalIndex < board[0].length; horizontalIndex++) {
            let val = board[verticalIndex][horizontalIndex]
            let squareHash = Math.floor(verticalIndex / 3).toString() + Math.floor(horizontalIndex / 3).toString()
            if (!verticals[verticalIndex]) {
                verticals[verticalIndex] = {}
            }
            if (!horizontals[horizontalIndex]) {
                horizontals[horizontalIndex] = {}
            }
            if (!squares[squareHash]) {
                squares[squareHash] = {}
            }
            
            //console.log(squareHash)
            //console.log(verticals[verticalIndex][val])
            if (val != ".") {
                if (verticals[verticalIndex][val]) {
                    return false
                } else {
                    verticals[verticalIndex][val] = true 
                }

                if (horizontals[horizontalIndex][val]) {
                    return false
                } else {
                    horizontals[horizontalIndex][val] = true
                }

                if (squares[squareHash][val]) {
                    return false
                } else {
                    squares[squareHash][val] = true
                }
            }
        }
    }
    return true
};

let board1 = 
[["5","3",".",".","7",".",".",".","2"]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
console.log(validSoduku(board1))

let board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
console.log(validSoduku(board2))

let board3 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
console.log(validSoduku(board3))
