// feature released 2019

/*  flat , flatMap array methods */

	let array = [1,2,3, [ 1,2,4, [1,2,4 ]]];

	//flat
	console.log(array.flat());
	console.log(array.flat(2)); //deep of matrix to be flatted.
	console.log(array.flat(3));

	//flatMap
	let arrayMap = [1,2,3,4,5]
	console.log(arrayMap.flatMap( value => [value , value * 2] ));

/* 
	trimStart: delete spaces to start string;
	trimEnd: delete spaces to end string;
*/

	const startSpaces = '                space';
	console.log(startSpaces)
	console.log(startSpaces.trimStart());

	const endSpaces = 'space                     ';
	console.log(endSpaces);
	console.log(endSpaces.trimEnd());

/*  optional catch binding  */

	try {
		
	} catch (error) {
		throw error
	}

	try {
		
	} catch {
		throw error // is already available
	}

/* Object.fromEntries: arrays to object */	

	let entries = [['name', 'user1'], ['age', 2]];
	console.log(Object.fromEntries(entries));

	let entriesTest = ['name' , 1 , 'age', 2]; //Error , wrong array sintaxis
	console.log(Object.fromEntries(entriesTest));

/* Symbol description */

	let mySymbol = `my symbol description`;
	let symbol = Symbol(mySymbol);
	console.log(symbol.description);