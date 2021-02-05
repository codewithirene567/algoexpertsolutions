function threeNumberSum(array, targetSum) {
    array.sort(function(a, b){return a-b})
	const triplet = []

	for(let i = 0; i < array.length - 2; i++){
		//always want to have a right pointer and a left pointer
		//last number has to be the 3rd value from the end because we want to have at least 2 other values
		
			let leftPointer = i + 1
			
			let rightPointer = array.length - 1
		while (leftPointer < rightPointer){
			let currentNumber = array[i]
			const currentSum = currentNumber + array[leftPointer] + array[rightPointer]
			if(currentSum === targetSum){
				
				triplet.push([currentNumber,array[leftPointer], array[rightPointer]])
				leftPointer++
				rightPointer--
				//we want to increment both because we dont want the values to be less or more when moving our
				//pointers
			} else if (currentSum<targetSum){
				leftPointer++
			} else if (currentSum>targetSum){
				rightPointer--
			}
		}
	}
	return triplet
}