
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

