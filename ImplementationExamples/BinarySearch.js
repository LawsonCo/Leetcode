
// O(LogN) search for an item in a sorted array
function binarySearch(arr, target, startInclusive, endInclusive) {
    if (endInclusive - startInclusive <= 0) {
        return false
    }
    let mid = Math.floor((endInclusive + startInclusive) / 2)
    if (arr[mid] == target) {
        return true
    }
    console.log("Searching: " + startInclusive + " " + endInclusive)
    console.log("Comparing to : " + arr[mid])
    if (arr[mid] > target) {
        return binarySearch(arr, target, startInclusive, mid-1)
    } else {
        return binarySearch(arr, target, mid+1, endInclusive)
    }
}

let testArr = [1, 3, 5, 7, 8, 9, 10, 30, 50, 100]
console.log(binarySearch(testArr, 5, 0, testArr.length - 1))
// true
console.log(binarySearch(testArr, 50, 0, testArr.length - 1))
// true
console.log(binarySearch(testArr, 6, 0, testArr.length - 1))
// false