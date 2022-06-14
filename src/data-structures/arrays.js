/* Arrays or Lists are ordered collection of information addressed by indexes */

/* 
	There are arrays of type dynamics and statics:
	-dynamics: Amount of memory undefined, this allows you to make modifications to them.
	-statics: A specific amount of memory assigned because of number of data fixed (slots).
	=> Js set arrays type dynamic by the default
 */

//Building an array like a class.
const indexObject = {
	'1': 1,
	'2': 2,
	'3': 3,
	'4': 4,
	'5': 5,
}

console.log({
	index: indexObject[2]
});
class MyOwnArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.data;
	}

}

const users =  new MyOwnArray();

users.push('firstUser');
users.push('secondUser');

console.log({
	user: users.get(1)
});