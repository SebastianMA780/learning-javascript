/* 
	" It is a mechanism where you can to derive a class 
		from another class for a hierarchy of classes that share 
		a set of attributes and methods. "
*/

export class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greet(message, name) {
		console.log(`${message} ${name}!!!!`);
	}
	
}

class FreeStudent extends Student{
	constructor(props) {
		super(props); // call constructor of Student.
	}

	greetFreeStudent() {
		console.log(`my name is ${this.name} and i am studying for free`);
	}

}

class PremiumStudent extends Student {
	constructor(props) {
		super(props);
	}

	greetPremiumStudent() {
		console.log(`my name is ${this.name} and i am studying by paying`);
	}

}

const freeStudent = new FreeStudent('Raphael');
const premiumStudent = new PremiumStudent('Miguel');