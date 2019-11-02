Array.prototype.myForEach = function(callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this);
	}
}

Array.prototype.myMap = function(callback) {
	let newArray = [];
	for (let i = 0; i < this.length; i++) {
		newArray.push(callback(this[i], i, this));
	}
	return newArray;
}

Array.prototype.mySort = function(callback) { //method where sorting is used and the callback function is checked
	if (arguments.length === 0) { //convert array to string
		for (let i = 0; i < this.length; i++) {
			this[i] = this[i].toString();
		}
		for (let i = 1, l = this.length; i < l; i++) {
			let current = this[i];
			let j = i;
			while (j > 0 && this[j - 1] > current) {
				this[j] = this[j - 1];
				j--;
			}
			this[j] = current;
		}
		for (let i = 0; i < this.length; i++) { //types conversion
			if (!isNaN(this[i]))
				this[i] = +this[i];
		}
	} else {
		let result = callback(1, 0);
		for (let i = 1, l = this.length; i < l; i++) {
			let current = this[i];
			let j = i;
			while (j > 0 && this[j - 1] > current) {
				this[j] = this[j - 1];
				j--;
			}
			this[j] = current;
		}
		for (let i = 0; i < this.length; i++) { //types conversion
			if (!isNaN(this[i]))
				this[i] = +this[i];
		}
		if (result < 0) {
			this.reverse();
		}
	}
}