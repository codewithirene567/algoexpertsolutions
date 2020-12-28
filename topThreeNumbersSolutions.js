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