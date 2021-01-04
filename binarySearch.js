function binarySearch(array, target) {
    let left = 0
    let right = array.length-1
    for (let i=0; i<array.length; i++){
        let middle = Math.floor((left+right) / 2)
        if(array[middle] === target){
            return array.indexOf(target)