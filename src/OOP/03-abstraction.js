/* 
	Abstraction is intended to hide the internal implementation details. 
	you just need to know which methods of the object are available 
	to call and which input parameters are needed to trigger a specific operation. 
	But you don’t need to understand how this method is implemented and which kinds of actions 
	it has to perform to create the expected result. 
*/

export class Course {
	constructor({
		name,
		classes = []
	}) {
		this.name = name;
		this.classes = classes;
	}

	addClass(name) {
		this.classes.push(name);
	}
}

const programingFundamentals = new Course({
	name: 'Programing Fundamentals', 
	classes: [],
});
programingFundamentals.addClass('first class');