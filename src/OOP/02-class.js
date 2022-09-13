// classes are just a more friendly syntax but they still work with prototypes inside;

/* 
	"	
		JavaScript classes, introduced in ECMAScript 2015, 
		are primarily syntactical sugar over 
		JavaScript’s existing prototype-based inheritance. 
		The class syntax does not introduce a new object-oriented inheritance model to JavaScript.
	" 
*/

/* 
	Resources:
	- https://medium.com/@parsyval/javascript-prototype-vs-class-a7015d5473b
*/

	class Student {
		constructor(name, age) {
			this.name = name;
			this.age = age;
		}

		greet(message, name) {
			console.log(`${message} ${name}!!!!`);
		}
		
	}

	const jim = new Student('jim parrot', 23);