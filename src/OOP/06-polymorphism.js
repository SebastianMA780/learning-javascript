/* 
	" It is the practice of designing objects to share behaviors and 
	to be able to override shared behaviors with specific others. "  
*/

export class Comment {
	constructor({
		content,
		name
	}) {
		this.content = content;
		this.name = name;
	}

	publish() {
		console.log(this.content);
	}
}

class CompleteComment extends Comment {
	constructor(props) {
		super(props);
	}

	publish() {
		console.log(`${this.content} by ${this.name}`);
	}
}

const completeComment = new CompleteComment({
	name: 'Super Student',
	content: 'method overwrite to practice polymorphism'
});

