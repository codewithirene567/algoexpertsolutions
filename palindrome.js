
//using the methods, compare the reverse string to the original string
function isPalindrome(string) {

      //["a","b","c"]
      let reversedString = string.split("").reverse().join("")
      //return the new array as a string
      
      if (reversedString === string){
          return true
      } else {
          return false
      }
  }

  //second solution which uses a for loop but does the same thing
  //creates a new empty string instead directly with a variable
  function isPalindrome(string) {
    // Write your code here.
       const reversedString = ''
       for (let i = string.length -1; i>=0; i--){
           reversedString += string[i];
       }
       return string === reversedString
  }

  //using a pointer system for the last solution
  //each pointer is an index
  function isPalindrome(string) {
    // Write your code here.
      let leftPointer = 0
      let rightPointer = string.length-1
  } 