/**
 * Spiral Matrix 
 * 
 * Given a Matrix 
 * Output it in spiral order
 */

function getLayer(n, m, layer, matrix) {
    let layers = []
    for (let i = layer; i <= (m - layer); i++) {
        layers.push(matrix[layer][i])
    }
    for (let i = layer + 1; i <= (n - layer); i++) {
        layers.push(matrix[i][m - layer])
    }
    // Don't double back if the layer is 1 dimensional.
    if (n - layer != layer) {
        for (let i = (m - layer - 1); i >= layer; i--) {
            layers.push(matrix[n - layer][i])
        }
    }
    // Don't double back if the layer is 1 dimensional.
    if (m - layer != layer) {
        for (let i = (n - layer - 1); i >= layer + 1; i--) {
            layers.push(matrix[i][layer])
        }
    }
    return layers
}

function spiralOrder(matrix) {
    if (matrix.length == 0) {
        return matrix
    }
    let n = matrix.length - 1
    let m = matrix[0].length - 1
    let layer = 0
    let layers = []
    if (n == 0 || m == 0) {
        return getLayer(n, m, 0, matrix)
    }
    while ((n - layer) > 0 && (m - layer) > 0) {
        layers = layers.concat(getLayer(n, m, layer, matrix))
        layer++
    }
    return layers
}

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
]
let matrix2 = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
   ]

let matrix3 = [[1]]

console.log(spiralOrder(matrix3))