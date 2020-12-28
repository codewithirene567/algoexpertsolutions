function findThreeLargestNumbers(array) {
    // Write your code here.
      let threeNumbers = [null, null, null]
  //1)In the very beginning these three numbers are initialized to null
      for (const number of array){
          //for each number of the input array, call the helper method
          //update largest and pass in the three number array and the number are on
          updateLargest(threeNumbers, number)
      }
          return threeNumbers
      //eventually return the three numbers
          
      }
//first helper method
      function updateLargest(threeNumbers, number){
        if(threeNumbers[2] === null || number > threeNumbers[2]){
            //compare the current number to the largest value in our largest three numbers array
            //checks one by one if these numbers are none or if the number is greater than the current number
            shiftToUpdate(threeNumbers, number, 2)
	} else if (threeNumbers[1] === null || number > threeNumbers[1]){
		//otherwise if our second largest number is null or if the number we are on 
		//is bigger than the second number in our numbers array 
		//then call our helper method and pass in the three numbers array,
		//the number we are on and the second index
		shiftToUpdate(threeNumbers, number, 1)