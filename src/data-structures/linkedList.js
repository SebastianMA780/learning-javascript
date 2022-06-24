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

}

let myLinkedList = new SinglyLinkedList(1);
console.log({
	myLinkedList
});
myLinkedList.append(2);
console.log({
	myLinkedList: myLinkedList.prepend(0)
});
