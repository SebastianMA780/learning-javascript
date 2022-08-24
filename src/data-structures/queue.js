/* 
	Queue: 
	- Represents a sequence of elements in a linear data structure format.
		* access to the elements is bases on FIFO principle.
			=> FIFO means, First In , First out.
	- Operations:

*/

class Node {

	constructor(value) {
		this.value = value;
		this.next = null;
	}

}

class Queue {

	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	peek() {
		return this.first;
	}

	enqueue(value) {
		const newNode = new Node(value);
		if(!this.length) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length ++;
		return this;
	}

	dequeue() {
		if(!this.length) return;
		const dequeueNode = this.first;
		if(this.length === 1) {
			this.first = null;
			this.last = null;
		} else {
			this.first = dequeueNode.next;
		}
		this.length --;
		return dequeueNode;
	}

}

const myQueue = new Queue();