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
            