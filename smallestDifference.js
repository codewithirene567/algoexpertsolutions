function smallestDifference(arrayOne, arrayTwo) {
  
	arrayOne.sort((a,b) => (a-b))
	arrayTwo.sort((a,b) => (a-b))
	let arrayOneVariable = 0
	let arrayTwoVariable = 0
	let answer = []
	let smallest = Infinity
	//infinity will be greater than anything
	let current = Infinity
	while (arrayOneVariable < arrayOne.length && arrayTwoVariable < arrayTwo.length){
		//as long as the pointer for both arrays is less than the number of items
			let firstNum = arrayOne[arrayOneVariable]
			let secondNum = arrayTwo[arrayTwoVariable]
		if (firstNum < secondNum){
			current = secondNum - firstNum
			arrayOneVariable = arrayOneVariable + 1
			//if we increase the first number's pointer then we will get a smaller value after
			//the second num - first num is returned for next time
		
		} else if (secondNum < firstNum){
				current = firstNum - secondNum
				arrayTwoVariable = arrayTwoVariable + 1
		} else {
			return [firstNum, secondNum]
		} 
		if (smallest > current){
			smallest = current
			answer = [firstNum, secondNum]
			//once you've calculated the difference
			//then update the smallest different to be the current difference
			//at this point current is always going to be smaller than infinity so the answer should 
			//be updated to return the array
		}
	}
	return answer
}
