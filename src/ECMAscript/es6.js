/* EcmaScript 2016 features */

//Default params
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

//Template literal
const userName = 'Willy';
const lastName = 'Wallace';
const prevName = userName + ' ' + lastName; //prev Versions
const templateName = `${userName} ${lastName}`;

console.log({
	prevName,
	templateName
});

//Multi line
const multilinePhrase = 'lorem phrase multiline then it will be splitted \n' +
'this is a new line.';
const multilinePhraseEs6 = `lorem phrase multiline then it will be splitted 
this is a new line.`;

console.log(multilinePhrase);
console.log(multilinePhraseEs6);

//Destructuring.
const person = {
	personName: 'Sebastian',
	age: 28,
	country: 'Colombia'
}

//prev versions
console.log(person.personName, person.age);

const { personName, age, country } = person;
console.log(personName, age);

	/* It is posible rename variables too with destructuring without affect original object. */
const { personName: personName2, age: personAge2, country: personCountry2 } = person;
console.log({
	personName2,
	personAge2,
	personCountry2,
	originalVar: person.personName
});

//spread operator
let team1 = ['W', 'S', 'T'];
let team2 = ['R', 'v', 'Z'];

let joinTeams = [...team1, ...team2, 'L', 'N'];

console.log({
	joinTeams
})