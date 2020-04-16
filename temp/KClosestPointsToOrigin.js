/**
 * Find the k closest points to an origin point 
 */

function getDistanceToOrigin(point) {
    return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2))
} 

var kClosest = function(points, K) {
    console.log(points)
    points = points.sort(function(a, b) {
        return getDistanceToOrigin(a) - getDistanceToOrigin(b)
    })
    console.log(points)
    return points.slice(0, K)
}; 

console.log(kClosest([[500, 500], [3,3],[5,-1],[-2,4]], 2))

console.log(getDistanceToOrigin([3, 3]) - getDistanceToOrigin([500, 500]))