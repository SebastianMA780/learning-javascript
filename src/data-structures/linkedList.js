/* 
	Linked List

	- Organized node set that contains the value we need and a reference to the next node.
		* value: current node data.
		* Head: reference to first node.
		* Tail: reference to last node.
		* Next: reference to next node.
		* Prev: reference to previous node.

		-> Singly Linked List (one direction):
			* each node save its value and the reference to the next node
			* in this type of list you can only advance in it forward.
				- So for get a previous value you need to start in the head again.

		-> Doubly linked list ( two directions)
			* each node save its value and the reference to the next and prev node.
			* You can move forward and backward
*/

export let singlyLinkedList = { //Visual reference.
	head: {
		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: {
					value: 4,
					next: null,
				}
			}
		}
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {

	constructor(value) {
		this.head = {
			value,
			next: null,
		}
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const node = new Node(value);
		this.tail.next = node;
		this.tail = node;
		this.length++

		return this;
	}

	prepend(value) {
		const node = new Node(value);
		node.next = this.head;
		this.head = node;
		this.length++

		return this;
	}

	insert(index, value) {
		if(index >= this.length) {
			return this.append(value);
		}
		const node = new Node(value);
		const firstPointer = this.getIndex(index - 1);
		if(!firstPointer) return;
		const holdingPointer = firstPointer.next;
		firstPointer.next = node;
		node.next = holdingPointer;
		this.length++;
		return this;
	}

	getIndex(index) {
		if(isNaN(index)) return null;
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}

		return currentNode;
	}

}

let myLinkedList = new SinglyLinkedList(1);
console.log({
	myLinkedList
});
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
console.log({
	myLinkedListInsert: myLinkedList.insert(3,10),
	myLinkedListPrepend: myLinkedList.prepend(0),
});
