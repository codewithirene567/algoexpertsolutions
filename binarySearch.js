function binarySearch(array, target) {
    let left = 0
    let right = array.length-1
    for (let i=0; i<array.length; i++){
        let middle = Math.floor((left+right) / 2)
        if(array[middle] === target){
            return array.indexOf(target)
        } else if (array[middle] > target){
            right = middle-1
           } else if (array[middle] < target){
            left = middle +1
           }
    }
           return -1
          }
          //first initialize both sides
          //use a for loop to look through everything
          //wrote an if statement to be the final return
          //else if statements are written to move the pointers to their place to 
          //eliminate numbers
          //if not found, return -1 