//brute force way
function twoNumberSum(array, targetSum) {
    //look through all the numbers and if the first number and second number
      //add up to targetSum then return those two numbers
      //otherwise return []
      let answer = []
      for( i = 0; i < array.length ; i++){
          //want to go all the way to the before last value in the array
  
  
          for( j= i+1; j<array.length;j++){
          
              if(array[i]+array[j]===targetSum){
   //{"array": [3, 5, -4, 8, 11, 1, -1, 6], "targetSum": 10}
                   answer.push(array[i], array[j])
                  //return [array[i], array[j]]
                  
                  return answer
              } 
              }
          }
      //if return statement is not hit then return the answer
       return answer
  }

  //hash table way of solving it
  function twoNumberSum(array, targetSum) {
    let numbersObject = {}
      for (const number of array){
  // 		for (variable of iterable) {
  //   // code block to be executed
  // }
          //iterable - An object that has iterable properties.
          let numberWeAreChecking = targetSum - number
          if ( numberWeAreChecking in numbersObject){
                  return [numberWeAreChecking, number]
              //return x,y - these are the two numbers that make up the sum
          }else{
              numbersObject[number]=true
              //otherwise store the number we are on in the hash table
          }
      }
  return [];
  }

  //Sorting way I solved it
  function twoNumberSum(array, targetSum) {
    array.sort(function(a, b){return a-b})
      let leftPointer = 0
      let rightPointer = array.length-1
      let answer = []
      for(i=0; i<array.length; i++){
          if (array[leftPointer] + array[rightPointer]===targetSum){
              //for loop runs until it gets to here to get to a return statement
              //if no return statement then skip to next line out of for loop once it goes through all numbers
              return [array[leftPointer], array[rightPointer]]
          } else if (array[leftPointer] + array[rightPointer] <targetSum) {
              leftPointer++
              
          } else if (array[leftPointer] + array[rightPointer] >targetSum){
              rightPointer--
          }
      }
      return answer
  }
  