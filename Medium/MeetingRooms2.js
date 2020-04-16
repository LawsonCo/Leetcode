/**
 * Meeting Rooms 2
 * 
 * Given an array of meeting intervals 
 * Output the minimum number of conference rooms required
 * 
 * Ie. Find the most number of directly overlapping intervals
 */

// Which meetings are happening don't matter! 
// The only thing that matters is how many have started and not ended 
// Sort by start times 
// Sort by end times 
// Iterate over both sorted arrays. Determine difference between strat and end 
var minMeetingRooms = function(intervals) {
    let sorted_by_start = intervals.sort(function(a,b) {
        return a[0] - b[0]
    })
    let sorted_by_end = [...intervals]
    sorted_by_end.sort(function(a,b) {
        return a[1] - b[1]
    })
    let start_iterator = 0
    let end_iterator = 0
    let total_rooms = 0
    while (start_iterator != intervals.length && end_iterator != intervals.length) {
        if (sorted_by_start[start_iterator][0] < sorted_by_end[end_iterator][1]) {
            start_iterator++
        } else {
            end_iterator++
        }
        total_rooms = Math.max(total_rooms, (start_iterator - end_iterator))
    }
    return total_rooms
};

console.log(minMeetingRooms([[5,8],[6,8]]))