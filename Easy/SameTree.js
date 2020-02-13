/**
 * Same Tree 
 * 
 * Determine if 2 binary trees are identical 
 * Identical means that they have the exact same values in the exact same places
 * Note that the trees may not be balanced
 */

var isSameTree = function(p, q) {
    // Check if either nodes are null, don't recurse here
    if (!p || !q) {
        return q == p
    }
    return (q == p) && isSameTree(q.left, p.left) && isSameTree(p.right, q.right)
};