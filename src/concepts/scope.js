/* 
 	" is the current context of execution in which 
 		values and expressions are "visible" or can be referenced.	"
		https://developer.mozilla.org/en-US/docs/Glossary/Scope

		types: 

		- Global
		- Function
		- Block
*/

/* Global scope */

	export var globalFruit = 'Apple'; //global scope;
	country = 'Colombia'; //global scope; when you initialize a variable without declaring it.
	

/* Function Scope  */

	function fnScope() {
		let useName = 'user'; // only available in the fn context
		console.log(useName);
	}

	fnScope();
	console.log(useName);


/* Block Scope  */

	function fnBlockScope() {
		if(true) {
			var user1 = 'this user';
			let user = 'this user'; //  only available in this block of code
			const user2 = 'this user';//  only available in this block of code
		}
		console.log(user1) //
		console.log(user) //
		console.log(user2) //
	}

	fnBlockScope();