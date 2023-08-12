/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable no-multiple-empty-lines */

/*

	Object  Literal: are comma-separated list of name-value pairs inside curly braces
	e.x:
	const greeting = {
    fullName: "Michael Jackson",
    greet: (message, name) => {
        console.log(message + " " + name + "!!");
    }
	};

	* Object Literal !== instances but these instances refer to those that are created by us.
		- they are instances of js Object prototype.
	* These object are not the same than objects in object oriented programming

*/

/*
	Prototype: " Prototypes are the mechanism by which JavaScript objects inherit features from one another. "
		- JavaScript has some prototypes by default.
			* Object
			* Array
			* String
			* Number

		- **
			Then all objects in js are instance of one of the top prototypes.
			This is why objects always have properties by default.
		** -

*/

/* Interesting fact:
	"
		When we try to access a property of an object, the JavaScript engine
		first tries to find the property on the object,
		if the property is present on the object it outputs its value. But,
		if the property is not present on the object then it tries to find the property on
		the prototype object or dunder proto of the object. If the property is found
		the value is returned else JavaScript engine tries to find the property on the dunder proto of the object.
		This chain continues until the dunder proto property is null. In these cases, the output will be undefined.
	"
*/

/*
	Resources:
	- https://betterprogramming.pub/prototypes-in-javascript-5bba2990e04b
*/

function Student (name, age) { // prototype
  this.name = name
  this.age = age
  this.yield = function () {
    console.log('YIElD!!')
  }
}

Student.prototype.greet = function () { // all objects in js has prototype property.
  console.log('Hi !!!!')
}
/* creation of	yield vs greet:

	although both ways of adding methods will work, there is a performance difference,
	adding the method in the prototype function will create a copy of it in any instance so
	it is a memory leak instead creating the method in prototype property of student
	it will be shared between all Student instances because of
	it is added to the object prototype of student.

*/

const will = { // object literal
  name: 'Smith',
  age: 22,
  greet () {
    console.log('Hi !!!!')
  }
}

const nath = new Student('Nath', 30)
