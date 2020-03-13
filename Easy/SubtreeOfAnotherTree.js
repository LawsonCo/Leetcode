/**
 * Subtree of another tree 
 * 
 * Check if tree s is a subtree of tree t
 */

function overlap(s, t) {
    if (s == null && t == null) {
        return true
    }
    if (s == null || t == null) {
        return false
    }
    if (s.val != t.val) {
        return false
    }
    return overlap(s.left, t.left) && overlap(s.right, t.right)
}

var isSubtree = function(s, t) {
    if (t == null || s == null) {
        return false
    }
    if (s.val == t.val) {
        if (overlap(s, t)) {
            return true
        }
    }
    return isSubtree(s.left, t) || isSubtree(s.right, t)
};