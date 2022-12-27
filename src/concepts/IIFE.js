/* 
	IIFE (Immediately Invoked Function Expression)

	- Is a function that is executed immediately after it is defined.

		* Main benefit is data privacy and quick execution.
*/

(function() {
	console.log('IIFE');
})();

(function(name) {
	console.log('Hello ' + name);
})('John');
