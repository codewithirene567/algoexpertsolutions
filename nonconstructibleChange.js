function nonConstructibleChange(coins) {
    coins.sort((a, b)=> a-b)
	let currentChange = 0
	
	
	for (let i =0; i<coins.length; i++){
		if(coins[i] > currentChange + 1 ){
			//return current change +1
			//because cannot create current change +1
			console.log(coins[i])
			//1> 1
			return currentChange + 1
		} else {
			//we set current change to current change plus whatever coin we're on
			//and keep checking until current change plus 1 is bigger than the coin we're on
			currentChange = currentChange + coins[i]
		}
	}
	 return currentChange + 1;
	//going to represent the next value we cannot create
}

//in this algorithm we are trying to find out the 
//minimum amount of change we can't create out of an array of coins given to us
//like coins = [1,2,5], in this example the answer would be 4
//we want to return that number as the final answer
