function mergeSortedArrays(arr, startInclusive, mid, endInclusive) {
	// create a temp array
	var temp = []

	// crawlers for both intervals and for temp
    var i = startInclusive
    var j = mid+1

	// traverse both arrays and in each iteration add smaller of both elements in temp 
	while(i <= mid && j <= endInclusive) {
		if(arr[i] <= arr[j]) {
			temp.push(arr[i]);
			i++
		}
		else {
			temp.push(arr[j])
			j++
		}
	}

	// add elements left in the first interval 
	while(i <= mid) {
		temp.push(arr[i])
		i++
	}

	// add elements left in the second interval 
	while(j <= endInclusive) {
		temp.push(arr[j])
		j++
	}

	// copy temp to original interval
	for(i = startInclusive; i <= endInclusive; i += 1) {
		arr[i] = temp[i - startInclusive]
    }
}

function mergeSort(myArr, startInclusive, endInclusive) {
	console.log("Sorting for range: " + startInclusive + " " + endInclusive)
    if (endInclusive - startInclusive > 0) {
        var mid = Math.floor((endInclusive + startInclusive) / 2)

        mergeSort(myArr, startInclusive, mid)
        mergeSort(myArr, mid+1, endInclusive)
        mergeSortedArrays(myArr, startInclusive, mid, endInclusive)
    }
}

var testArr1 = [4, 2, 3, 1, 10, 0, 600, 3]
mergeSort(testArr1, 0, testArr1.length - 1)
console.log("result " + testArr1)