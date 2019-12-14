function merge(arr1, arr2) {
    var temp = []
    var i = 0
    var k = 0
    while (i < arr1.length && k < arr2.length) {
        if (arr1[i] <= arr2[k]) {
            temp.push(arr1[i])
            i++
        } else {
            temp.push(arr2[k])
            k++
        }
    } 
    if (i < arr1.length) {
        temp = temp.concat(arr1.slice(i))
    }
    if (k < arr2.length) {
        temp = temp.concat(arr2.slice(k))
    }
    console.log("merging " + arr1 + " and " + arr2)
    console.log("result: " + temp)
    return temp
}

function mergeSort(arr) {
    console.log("Sorting for " + arr)
    mid = Math.floor(arr.length/2)
    if (arr.length == 1 || arr.length == 0) {
        return arr
    }
    if (arr.length == 2) {
        if (arr[0] < arr[1]) {
            return arr
        }
        else {
            temp = arr[0]
            arr[0] = arr[1]
            arr[1] = temp
            return arr
        }
    }
    var left = mergeSort(arr.slice(0, mid))
    var right = mergeSort(arr.slice(mid + 1, arr.length))
    return merge(left, right)
}

console.log(mergeSort([5, 8, 3, 1, 0 , 4, 9, 22]))
