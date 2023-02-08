function countNumbers(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}

console.time('countNumbers');
countNumbers(1000);
console.timeEnd('countNumbers');


