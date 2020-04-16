// Rotate an NxN Matrix 
// Given a matrix, move every element to the side 90 degrees adjacent 
// 1 2 3      7 4 1
// 4 5 6  =>  8 5 2 
// 7 8 9      9 6 3

function rotateLayer(matrix, layer) {
    let top = layer
    let right = matrix.length - 1 - layer
    let bottom = matrix.length - 1 - layer
    let left = i = matrix.length - 1 - layer
    while (top < matrix.length - layer) {
        //console.log(matrix[right][matrix.length - 1 - layer]) // top
        //console.log(matrix[layer][top]) // right
        //console.log(matrix[matrix.length - 1 - layer][bottom]) // bottom
        //console.log(matrix[left][layer]) // left
        let temp_top = matrix[layer][top]
        matrix[layer][top] = matrix[right][matrix.length - 1 - layer] // set top to right
        matrix[right][matrix.length - 1 - layer] = temp_top // set right to top

        let temp_left = matrix[left][layer]
        matrix[left][layer] = matrix[matrix.length - 1 - layer][bottom] // set left to bottom
        matrix[matrix.length - 1 - layer][bottom] = temp_left // set bottom to left

        console.log(matrix)
        top++
        right--
        bottom--
        left--
    }
}

let test_matrix = [
    [15,13, 2, 5],
    [14, 3, 4, 1],
    [12, 6, 8, 9],
    [16, 7,10,11]
]
console.log(test_matrix)
rotateLayer(test_matrix,0)
console.log(test_matrix)

function rotate(matrix) {
    
};
