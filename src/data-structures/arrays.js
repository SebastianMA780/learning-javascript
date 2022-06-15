/* Arrays or Lists are ordered collection of information addressed by indexes */

/* 
	There are arrays of type dynamics and statics:
	-dynamics: Amount of memory undefined, this allows you to make modifications to them.
	-statics: A specific amount of memory assigned because of number of data fixed (slots).
	=> Js set arrays type dynamic by the default
 */

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

//Building an array like a class.
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

	pop() {
		const index = this.length - 1;
		if( index < 0) return; 
		const lastItem = this.data[index];
		delete this.data[index];
		this.length--;
		return lastItem;
	}

	delete(index) {
		if(isNaN(index) | index < 0) return;
		const item = this.data[index];
		this.shiftIndex(index);
		return item;
	}

	shiftIndex(index) {
		if(isNaN(index) | index < 0) return;
		for (let i = index; i < this.length; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}

}

const users =  new MyOwnArray();
users.push('firstUser');
users.push('secondUser');
console.log({
	users,
	user: users.get(1),
});
console.log({
	pop: users.pop(),
	users,
});

const animals = new MyOwnArray();
animals.push('lion');
animals.push('cat');
animals.push('dog');
animals.push('fish');

console.log({
	deleted: animals.delete(1),
	animals,
})

// Construct a method delete with index reordered.
// Construct a method unshift/shift , index are important.