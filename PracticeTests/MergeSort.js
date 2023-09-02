function mergeSortedArrays(first, second) {
    let i = 0
    let k = 0
    let temp = []
    while (i < first.length && k < second.length) {
        if (first[i] <= second[k]) {
            temp.push(first[i])
            i++
        } else {
            temp.push(second[k])
            k++
        }
    }
    if (i < first.length) {
        temp = temp.concat(first.slice(i))
    }        
    if (k < second.length) {
        temp = temp.concat(second.slice(k))
    }
    return temp                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
}

function mergeSort(myArr) {
    if (myArr.length <= 1) {
        return myArr
    }
    let mid = Math.floor(myArr.length / 2)
    let left = mergeSort(myArr.slice(0,mid))
    let right = mergeSort(myArr.slice(mid))
    return mergeSortedArrays(left, right)
}


console.log(mergeSortedArrays([4, 6, 10], [2, 6, 7]))
// Expect [2, 4, 6, 6, 7, 10]

var testArr1 = [4, 2, 3, 1, 10, 0, 600, 3]
console.log(mergeSort(testArr1))
// Expect [0, 1, 2, 3, 3, 4, 10, 600]