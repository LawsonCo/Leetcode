/**
 * Merge Intervals 
 * 
 * Given a set of intervals - [[1,3],[2,6],[8,10],[15,18]]
 * Merge overlapping intervals into the same interval, and then return the array
 * ex Output - [[1,6],[8,10],[15,18]] (See intervals 0 and 1 were merged into the same interval)
 */

function merge(intervals) {
    if (intervals.length == 0) {
        return []
    }
    intervals.sort(function(a, b) {return a[0] - b[0]})
    let curr_group_end = intervals[0][1]
    let groups = []
    groups[0] = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= curr_group_end) {
            curr_group_end = Math.max(intervals[i][1], curr_group_end)
            groups[groups.length -1][1] = curr_group_end
        } else {
            curr_group_end = intervals[i][1]
            groups.push(intervals[i])
        }
    }
    return groups
}

console.log(merge([[1,4],[2,3]]))