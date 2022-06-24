// feature released in 2018.

/*  spread operator for separate properties */

	export const user = {
		job: 'engineer',
		age: 28,
		country: 'US'
	}
	let { job, ...all } = user;
	console.log({
		job,
		all, // object without job property(shallow copy)
	});
	all.age = 20;
	console.log({
		user,
		all
	})

/* join properties  */

	export const newUser = {
		job: 'engineer',
		age: 28,
		country: 'US'
	}
	const objectAddition = {
		...newUser,
		gender: 'Male',
	}
	console.log(objectAddition)

/*  
	Promise.finally
		- executes its code at the end, no matter if the promise was resolved or rejected.
		 
*/	

	const promise = (bol) => {
		return new Promise((resolve, reject) => {
			if(bol) resolve('resolved');
			else reject('rejected');
		});
	}

	promise(true)
		.then(res => console.log(res))
		.catch(err => console.log(err))
		.finally(() => console.log('Finalizo'));

	promise(false)
	.then(res => console.log(res))
	.catch(err => console.log(err))
	.finally(() => console.log('Finalizo'));

/*  Regex improve: now you can access to captured groups info by parts */

	const regex = /([0-9]{4})-([0-9]{2})/;
	const match = regex.exec('2018-02');
	const first = match[1];
	console.log(first)