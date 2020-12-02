function isValidSubsequence(array, sequence) {
    // Write your code here.
      let j=0 // this is the second array index for the sequence numbers
      for(i=0; i < array.length; i++){
        //look through the main array until 
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