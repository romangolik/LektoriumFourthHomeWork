let R = 5;
let C = 6;
let r0 = 1;
let c0 = 4;
let result = [];
let all = [
	[r0, c0]
];

let count = 1;

for (let i = 1; i <= R * C; i++) {
	if (count < C && count % 2 == 1) {
		right();
	} else {
		left();
	}
	if (count % 2 == 1 && count < R) {
		down();
	} else {
		up();
	}
	count++;
}

function right() {
	for (let j = 0; j < count; j++) {
		if (c0 + 1 < C) {
			c0++;
			result.push(r0, c0);
			all.push(result);
			result = [];
		}
	}
}

function left() {
	for (let j = 0; j < count; j++) {
		if (c0 > 0) {
			c0--;
			result.push(r0, c0);
			all.push(result);
			result = [];
		}
	}
}

function down() {
	for (let j = 0; j < count; j++) {
		if (r0 + 1 < R) {
			r0++;
			result.push(r0, c0);
			all.push(result);
			result = [];
		}
	}
}

function up() {
	for (let j = 0; j < count; j++) {
		if (r0 > 0) {
			r0--;
			result.push(r0, c0);
			all.push(result);
			result = [];
		}
	}
}