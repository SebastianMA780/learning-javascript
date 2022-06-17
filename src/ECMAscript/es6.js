/* EcmaScript 2016 released in 2015 */

/* LET, CONST */

	{
		//LET allows to us declare variables with block scope
		let letScope = 'isAccesible?';
		console.log({
			letScope // in this block scope is available
		})
	}

	{
		//var declare variables globally or with function scope
		var accesible = 'this is accesible';
	}

	console.log({
		letScope, //letScope is not defined
		accesible, //defined
	})


	//CONST declares a variable which can't be reassigned.
	const fixedVariable = 1
	fixedVariable = 2; //throw error, variable reassigned


/* Objects properties */

	const animal = 'Lion';
	const trainer = 'Smith';

	const partners = {
		animal: animal,
		trainer: trainer
	}; // Before Es6 this

	const partnersEs6 = {
		animal,
		trainer,
	};

	console.log({
		partners,
		partnersEs6,
	});


/* Default params */

	function defaultParamsFn(
		name = 'User',
		age = 25,
		country = 'United States'
	) {
		console.log({
			name,
			age,
			country
		})
	}

	defaultParamsFn();
	defaultParamsFn('Sebastian', 28, 'Colombia');


/* Template literal */

	const userName = 'Willy';
	const lastName = 'Wallace';
	const prevName = userName + ' ' + lastName; //prev Versions
	const templateName = `${userName} ${lastName}`;

	console.log({
		prevName,
		templateName
	});


/* Multi line */

	const multilinePhrase = 'lorem phrase multiline then it will be splitted \n' +
	'this is a new line.';
	const multilinePhraseEs6 = `lorem phrase multiline then it will be splitted 
	this is a new line.`;

	console.log(multilinePhrase);
	console.log(multilinePhraseEs6);


/* Destructuring. */

	const person = {
		personName: 'Sebastian',
		age: 28,
		country: 'Colombia'
	}


	//prev versions
	console.log(person.personName, person.age);

	const { personName, age, country } = person;
	console.log(personName, age);

	//It is posible rename variables too with destructuring without affect original object.
	const { personName: personName2, age: personAge2, country: personCountry2 } = person;
	console.log({
		personName2,
		personAge2,
		personCountry2,
		originalVar: person.personName
	});

	//on Arrays works with the position of the elements and renaming the index.
	const fruits = ['Manzana', 'Pera', 'Mango']
	const { 2: renamedIndex } = fruits;
	console.log({
		renamedIndex
	});


/* spread operator: expand properties of an object or array */

	let team1 = ['W', 'S', 'T'];
	let team2 = ['R', 'v', 'Z'];

	let joinTeams = [...team1, ...team2, 'L', 'N'];

	console.log({
		joinTeams
	})

	const userProfile = [
		'Sebastian',
		28,
		'Engineer',
	]

	function getUserProfile(name, age, title) {
		console.log({
			name,
			age,
			title
		})
	}

	getUserProfile(...userProfile);


/* Arrow function (Anonymous function): reduced syntax and this not binding  */

	const professions = [ 'Engineer' , 'Lawyer', 'Teacher', 'Doctor' ];

	const listingProfessions = professions.map(
		function (profession) { // Before Es6
			console.log(profession)
		}
	);
	const listingProfessionsEs6 = professions.map( 
		(profession) => console.log(profession) //Arrow function
	);
	const listOfUser = (userName, age, country) => { /* code */ } //normal structure.
	const singleItem = age => { /* code */} //with single parameter is allowed to omit().
	export const omitReturn = num => num * 2; //this is allowed when the function only return something.

		//With arrows functions there are not binding of this meanwhile in regular functions
		//this makes reference to the object who call the function. 
	const objThis = {
		name: 'this',
		call: function () {
			console.log(this.name) // can access to objThis properties.
		},
		arrowCall: () => {
			console.log(this?.name) // can not access , this is not binding.
			console.log(this);
		}
	}
	objThis.call();
	objThis.arrowCall();


/* Promises, this is in replace of callbacks to handle asynchronism */

	const newPromise = () => {
	return new Promise((resolve, reject) => {
		if(true) resolve('resolved');
		reject('wrong!')
	})
	}

	newPromise()
		.then(response => console.log(response))
		.catch(error => console.log(error));

/* Classes */
	class Calculator {

		constructor() {
			this.valueA = 0;
			this.valueB = 0;
		}

		sum(valueA, valueB) {
			this.valueA = valueA;
			this.valueB = valueB;
			return this.valueA + this.valueB;
		}

	}

	const calculator = new Calculator();
	console.log(calculator.sum(2,2));


/* Modules: Allow to us split code in many files. */

	import { namedValue } from "./module-file";
	import func from "./module-file";

	func();
	console.log(namedValue);


/* Generators: Function that keep track of its execution, it stops in every yield */

	function* phraseByWord() {
		if(true) {
			yield 'Js'
		}
		if(true) {
			yield 'is'
		}
		if(true) {
			yield 'amazing'
		}
		if(true) {
			yield 'and everyone should learn it'
		}
	}

	const phrase = phraseByWord();
	console.log(phrase.next().value)
	console.log(phrase.next().value)
	console.log(phrase.next().value)
	console.log(phrase.next().value)
	console.log(phrase.next().value) // return undefined if function ends its execution.