/* 
	IIFE (Immediately Invoked Function Expression)

	- Is a function that is executed immediately after it is defined.

	Pros:

	* IIFEs can create a private scope for variables and functions, 
		helping to prevent pollution of the global scope and to protect against variable collision.

	* IIFEs can be used to create modular, reusable code, 
		especially when combined with module patterns.

	* IIFEs can help to improve the structure and organization of code 
		by grouping related code together in a self-contained function.

Cons:

	* IIFEs can make code harder to understand, 
		especially for developers who are not familiar with this pattern.

	* IIFEs can increase the size of the code by requiring the function definition 
		and invocation to be written in a single line of code.

	* IIFEs can be less efficient than other patterns, such as 
		object-oriented programming or the module pattern, because 
		they require the function to be defined and invoked every time it is used.
*/

(function() {
	console.log('IIFE');
})();

(function(name) {
	console.log('Hello ' + name);
})('John');
