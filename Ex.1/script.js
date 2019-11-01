function Closure() {
	let count = 0;
	let message = 'Hello!';

	function countPlusOne(){
		count++;
		console.log(count);
	}

	function outputMessage(){
		console.log(message);
	}

	return {
		countPlus: function(){
			countPlusOne();
		},
		getMessage: function(){
			outputMessage();
		}
	};
}
