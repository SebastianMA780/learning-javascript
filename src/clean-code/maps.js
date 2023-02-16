/*  
	Maps: 
	- Allows you to store key value pairs like objects but have some differences
		* Keys can be any type of value, not just strings like in objects.
		* Maps maintain the order of their entries
		* Its better performant for adding and removing data.
*/

const mapOfThings = new Map();

mapOfThings.set(233, { name: "Luis", age: 23 });

console.log("🚀 ~ file: maps.js:2 ~ mapOfThings", mapOfThings)

mapOfThings.delete(233);

console.log("🚀 ~ file: maps.js:2 ~ mapOfThings", mapOfThings)

/* 
	In objects delete operator is notorious for poor performance. 
	maps are optimized for this operation.
*/

/*  
	When using one or another? (Options):

	- For structured objects that have a well-defined set of keys, you generally want an object.
	- When you can have any number of keys, and you may need to add and remove keys frequently, 
		consider using map for better performance and ergonomics.

*/