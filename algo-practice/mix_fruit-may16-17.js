function mix_fruit(arr) {
	let regular = ['banana', 'orange', 'apple', 'lemon', 'grapes'];
    let special = ['avocado', 'strawberry', 'mango'];
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
    	if (regular.indexOf(arr[i].toLowerCase()) >= 0) {
    		total += 5;
    	}
    	else if (special.indexOf(arr[i].toLowerCase()) >= 0) {
    		total += 7;
    	}
    	else {
    		total += 9;
    	}
    }
    return Math.round(total/arr.length);
}