//Here are two solutions I coded to pull out the duplicates in a random array of integers
//Prompt: Return numbers that occur more than one time in an array of numbers

//I coded two different solutions

function findIt(array){
    let answer = []
   //made a new array to hold all the numbers that occur more than once
    for(i=1; i<array.length; i++){
//I looped to look through the numbers beginning with the 2nd number
       if(array[i]==array[i-1]){
// If the 2nd number matched the one before it 
          answer.push(array[i])
//then it should be added to the new array because that means it occurred twice
     }
//As the loop goes through the second number becomes the third all the way until all numbers have been checked.

     return answer
}

//Second way:

function secondSolution(array){
    let newAnswer =[]
    //a new array to hold the duplicates
    let holdingArray = []
    //a holding array that acts as a hash table
    for(let i=0;  i<array.length; i++){
        //looking through the numbers
        if(holdingArray[array[i]] === undefined){
            //if the number doesn't exist then make it exist by assigning it to true
            holdingArray[array[i]] = true
        }else{
            //if it does exist then it has to be a duplicate so put it into the final answer
            if(newAnswer.indexOf(array[i]) == -1){
                newAnswer.push(array[i])
            }
        }
        }
        //return the answer
    return newAnswer
}
}
