

function binarySearch(arr, target, startInclusive, endInclusive) {
    console.log("Searching: " + startInclusive + " " + endInclusive)
    console.log("Comparing to : " + arr[mid])
}

let testArr = [1, 3, 5, 7, 8, 9, 10, 30, 50, 100]
console.log(binarySearch(testArr, 5, 0, testArr.length - 1))
// true
console.log(binarySearch(testArr, 50, 0, testArr.length - 1))
// true
console.log(binarySearch(testArr, 6, 0, testArr.length - 1))
// false