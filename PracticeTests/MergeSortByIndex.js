

function mergeSortedArrays(arr, startInclusive, mid, endInclusive) {
    let i = startInclusive
    let k = mid+1
    let temp = []
    while (i <= mid && k <= endInclusive) {
        if (arr[i] <= arr[k]) {
            temp.push(arr[i])
            i++
        } else {
            temp.push(arr[k])
            k++
        }
    }
    if (i <= mid) {
        temp = temp.concat(arr.slice(i, mid+1))
    }
    if (k <= endInclusive) {
        temp = temp.concat(arr.slice(k, endInclusive+1))
    }
    for (j = 0; j < temp.length; j++) {
        arr[startInclusive] = temp[j]
        startInclusive++
    }
}

function mergeSort(myArr, startInclusive, endInclusive) {
    if (endInclusive - startInclusive == 0) {
        return
    }
    let mid = Math.floor((startInclusive + endInclusive) / 2)
    mergeSort(myArr, startInclusive, mid)
    mergeSort(myArr, mid+1, endInclusive)
    mergeSortedArrays(myArr, startInclusive, mid, endInclusive)
}

//var testMergeArr = [1, 4, 6, 10, 2, 6, 7]
//mergeSortedArrays(testMergeArr, 0, 3, 6)
//console.log(testMergeArr)
// Expect [1, 2, 4, 6, 6, 7, 10]


var testArr1 = [4, 2, 3, 1, 10, 0, 600, 3]
mergeSort(testArr1, 0, testArr1.length - 1)
console.log("result " + testArr1)
// Expect [0, 1, 2, 3, 4, 4, 10, 600]