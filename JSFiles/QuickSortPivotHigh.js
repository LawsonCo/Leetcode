

// Don't forget to recurse on pivot+1 and pivot-1
// You don't want to end up in an infinite loop
function quickSort(arr, low, high) {
    if (low >= high) {
        return
    }
    let pivot = partition(arr, low, high)
    quickSort(arr, low, pivot-1)
    quickSort(arr, pivot+1, high)
}

function swap(arr, first, second) {
    let temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
}

// Partition using the last index as the pivot. 
// Explanation: 
// i starts below low, so outside of array
// Every element smaller than pivot is swapped with i+1, then i is incremented
// This garuntees that everything lower than i is smaller than pivot
// It also garuntees that everything larger than i is greater than pivot, since if it was smaller it would have been swapped
// and would thus be included in i's range
// At the end we swap i+1 with the pivot, since we know everything at or below i is smaller, and anything
// larger than i is larger than the pivot
function partition(arr, low, high) {
    console.log("Original array:")
    console.log(arr)
    let pivot = arr[high]
    let i = low - 1
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++
            swap(arr, i, j)
        }
    }
    let partitionIndex = i + 1
    swap(arr, partitionIndex, high)
    console.log("After Partition:")
    console.log(arr)
    console.log("Partition Index: " + partitionIndex)
    return partitionIndex
}

let test_arr = [1, 8, 3, 1, 0, 9, 10]
quickSort(test_arr, 0, test_arr.length - 1)
console.log(test_arr)
