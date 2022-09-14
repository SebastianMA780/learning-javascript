/* 

	"	Encapsulation is about wrapping data and methods into 
		a single class and protecting it from outside intervention. "

	Encapsulation allows you to hide specific information and 
	control access to the internal state of the object.

*/

export class Course {
	constructor({
		name,
		classes = []
	}) {
		this._name = name; //before ES12 " _ " is a convention to specify a field be private
		this.classes = classes;
	}

	get name() {
		return this._name; //be careful, if you name this.name it could lead to an infinite loop when you call it
	}

	set name(name) {
		this._name = name;
	}

	// for some reasons explained below it may be better to use this way of coding.

	getName() {
		return this._name;
	}

	setName(name) {
		this._name = name;
	}
}

const algorithms = new Course({name: 'Algorithms'});
algorithms.name;

// getter and setter could lead to errors as follows:
algorithms.nam = 'rename'; //typo but js will not notice due to you can add properties to objects
console.log(`${algorithms.nam} better course`);
algorithms.getNam(); // typo but this will throw error and it is better 