/* 
	Stack: 

	- Represents a sequence of elements in a linear data structure format.
		* access to the elements is bases on LIFO principle.
			=> LIFO means, Last In , First out.
	- Operations:
		* Push: adds an element to the top.
		* Pop: removes an element from the top.
		* Peek: View the topmost item in the stack.
*/


class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(value) {
		const newNode = new Node(value);
		if(this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const holdingPointer = this.top;
			this.top = newNode;
			this.top.next = holdingPointer;
		}
		this.length ++;
		return this;
	}

	pop() {
		if(!this.length) return;
		const popNode = this.top;
		if(this.length === 1) {
			this.top = null;
			this.bottom = null;
		} else {
			this.top = popNode.next;
		}
		this.length --;
		return popNode
	}
	
}

const myStack = new Stack();