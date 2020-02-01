function merge(arr1, arr2) {
    console.log("Merging: " + arr1 + " and " + arr2)
    let i = 0 
    let k = 0 
    let arr3 = []
    while (i < arr1.length && k < arr2.length) {
        if (arr1[i] < arr2[[k]]) {
            arr3.push(arr1[i])
            i++
        } else {
            arr3.push(arr2[k])
            k++     
        }
    }
    if (i < arr1.length) {
        arr3 = arr3.concat(arr1.slice(i))
    }
    if (k < arr2.length) {
        arr3 = arr3.concat(arr2.slice(k))
    }
    return arr3
}

function mergeSort(arr) {
    console.log("Merge Sorting: " + arr)
    if (arr.length <= 1) {
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid, arr.length))
    let res = merge(left, right)
    return res
}

//console.log(merge([1, 4, 8], [2, 10, 20])) 

let test_arr = [5, 8, 3, 1, 0 , 4, 9, 22]
console.log(test_arr)
console.log(mergeSort(test_arr, 0, test_arr.length))