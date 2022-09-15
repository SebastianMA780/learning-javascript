/* 
	"	A closure gives you access to an outer function's scope from an inner function.
		In JavaScript, closures are created every time a function is created, 
		at function creation time."
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
*/

function outerFn() {
	const outerUser = 'Outer User';
	console.log(outerUser);
	function innerFn() {
		const innerUser =  'Inner User';
		console.log({
			outerUser,
			innerUser,
		});
		function deepInnerFn() {
			console.log({
				outerUser,
				innerUser,
			})
		}

		return deepInnerFn();
	}
	return innerFn();
}

outerFn();