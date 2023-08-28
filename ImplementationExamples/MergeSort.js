function merge(first, second) {
    console.log("Merging: " + first + " and " + second)
    var temp = []
    var i = 0
    var k = 0
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
    var mid = Math.floor(myArr.length / 2)
    var leftArr = myArr.slice(0, mid)
    var rightArr = myArr.slice(mid)

    var left = mergeSort(leftArr)
    var right = mergeSort(rightArr)
    return merge(left, right)
}

console.log(mergeSort([4, 2, 3, 1]))