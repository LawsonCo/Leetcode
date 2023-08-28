// Find Median from Data Stream 
// Given a data structure where you can add numbers with addNum()
// Should be able to call findMedian() to return the median seen so far

class MedianFinder {
    constructor() {
        this.nums = []
    }
    addNum(num) {
        this.nums.push(num)
    }
    findMedian() {
        this.nums.sort(function(a,b) {return a-b})
        if ((this.nums.length % 2) == 0) {
            return (this.nums[this.nums.length/2] + this.nums[(this.nums.length/2) - 1])/2
        } else {
            return this.nums[Math.floor(this.nums.length/2)]
        }
    }
}

let test_med = new MedianFinder()
test_med.addNum(1)
test_med.addNum(2)
test_med.addNum(3)
test_med.addNum(4)
test_med.addNum(5)
test_med.addNum(6)
test_med.addNum(7)
test_med.addNum(8)
test_med.addNum(9)
test_med.addNum(10)
console.log(test_med.nums)
console.log(test_med.findMedian())