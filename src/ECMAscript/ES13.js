/*  at receive numeric value and return element from array at that position. */

	export const array = ['cat', 'dog', 'lion'];
	console.log(array.at(-1)); //-1 return last element.


/*  top level away: now is not needed an async function to use await  */

	import fetch from "node-fetch";

	const response = await fetch("https://api.escuelajs.co/api/v1/products");
	const products = await response.json();

	console.log(products);