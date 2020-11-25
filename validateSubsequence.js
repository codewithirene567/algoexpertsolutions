function isValidSubsequence(array, sequence) {
    // Write your code here.
      let j=0
      for(i=0; i < array.length; i++){
          console.log(array[i])
          console.log(sequence[i])
          
          if (array[i] === sequence[j]) {
              j++
          }
      }
      if (j === sequence.length) {
          return true
      } else {
          return false
      }
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;