/*  

	HOISTING: 

  - Hoisting is a JS mechanism where variables and function
	 declarations are moved to the top of their scope before code execution.

		* Declarations * : a declaration is a statement that introduces a new identifier (variable name).

	- This happens for both ** named ** function declarations and variable declarations with **va**r.

*/

console.log(scissors);
var scissors = 'blue';

// calling scissors before it is declared will return undefined instead of an error.

console.log(scissors);
let scissors = 'blue';

// calling scissors before it is declared will return an error because let has not hoisting.

b = 'Good Morning';
console.log(b); // Good Morning
var b;