function myForEach(array, callback, thisArg) {
	for (let i = 0; i < array.length; i++) {
		callback.call(thisArg, array[i], i, array);
	}
}

function myMap(array, callback, thisArg) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.push(callback.call(thisArg, array[i], i, array));
	}
	return newArray;
}

function mySort(array, callback) { //method where sorting is used and the callback function is checked
	if (!arguments[1]) {
		for (let i = 0; i < array.length; i++) {
			array[i] = array[i].toString();
		}
		sortMyArray(array);
	} else {
		let result = callback(1, 0);
		sortMyArray(array);
		if (result < 0) {
			array.reverse();
		}
	}
}

function sortMyArray(array) { //Sort method
	for (let i = 1, l = array.length; i < l; i++) {
		let current = array[i];
		let j = i;
		while (j > 0 && array[j - 1] > current) {
			array[j] = array[j - 1];
			j--;
		}
		array[j] = current;
	}
	for (let i = 0; i < array.length; i++) { //types conversion
		if (!isNaN(array[i]))
			array[i] = +array[i];
	}
}