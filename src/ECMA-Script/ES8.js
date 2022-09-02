// feature released in 2017.

/* Trailing commas: comma to the end */

	const commaEnd = {
		name: 'comma',
	}
	const commaArrayEnd = [1,2,];
	console.log({
		commaEnd,
		commaArrayEnd,
	});

/*  Object Entries: Can parse object to array */

	export const team = {
		frontend: 'id123',
		backend: 'id345',
		designer: 'id678'
	}
	const arrayTeam = Object.entries(team);
	console.log({
		arrayTeam,
		length: arrayTeam.length,
	});

/* Object Values: return an array with the object values */

	const arrayTeamValues = Object.values(team);
	console.log({
		arrayTeamValues,
		length: arrayTeamValues.length,
	});

/* padStart / padEnd: add text to a string. */

	const stringChange = 'add text'
	console.log(stringChange.padStart(10,'--')); // you have to specify the new length.
	console.log(stringChange.padEnd(10,'--')); // you have to specify the new length.


/* Async Await: to work with promises */

	//There is a difference with then, await stop function execution until the promise will be resolved

	const promiseFn = (output) => {
		return new Promise((resolve, reject) => {
			if (output) {
				resolve('resolved');
			} else {
				reject('rejected');
			}
		})
	}

	const asyncFunction = async () => {
		try {
			const response = await promiseFn(true); //await stop  the function execution until it will be resolved;
			console.log('execution stop until resolution');
			console.log({
				response
			});
		} catch (error) {
			throw error;
		}
	}
	asyncFunction();
	const returnAsyncFunction = asyncFunction();
	console.log({
		returnAsyncFunction // an async function return by default a Promise.
	})

	const thenFunction = () => {
		promiseFn(true)
			.then( res => console.log(res))
			.catch( err => console.log(err));
		console.log('execution continues');
		console.log('you can do whatever you want');
	}
	thenFunction();