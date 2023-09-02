

function mergeSortedArrays(arr, startInclusive, mid, endInclusive) {
}

function mergeSort(myArr, startInclusive, endInclusive) {
    console.log("Sorting: " + startInclusive + " " + endInclusive)
}

var testMergeArr = [1, 4, 6, 10, 2, 6, 7]
mergeSortedArrays(testMergeArr, 0, 3, 6)
console.log(testMergeArr)
// Expect [1, 2, 4, 6, 6, 7, 10]


var testArr1 = [4, 2, 3, 1, 10, 0, 600, 3]
mergeSort(testArr1, 0, testArr1.length - 1)
console.log("result " + testArr1)
// Expect [0, 1, 2, 3, 3, 4, 10, 600]