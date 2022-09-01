/* Async / await is Syntactic sugar  for promises */

	function promiseMethod() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(true);
			},4000);
		});
	}

	async function asyncMethod() {
		const response = await promiseMethod(); //await will wait for this promise be resolved.
		console.log(response);
	}

	async function asyncMethodTryCatch() {
		// try/catch functionality.
		try {
			const response = await promiseMethod();
			console.log(response);
			//succesful execution.
		} catch (error) {
			console.log(error);
			//failure in the execution.
			// error capture and handle.
		}
	}

//  WARNING!
//  ****** Be careful when use async / await because of it could lead to bad performance as follows: ******** \\

	const asyncTime = async () => {
		const response1 = await new Promise(resolve => setTimeout(() => resolve(1), 3000));
		const response2 = await new Promise(resolve => setTimeout(() => resolve(2), 3000));
		const response3 = await new Promise(resolve => setTimeout(() => resolve(3), 3000));
		console.log([response1, response2, response3]);
		/* In each await the function execution is stopped until promise will be resolved.
		So the final time in the execution function will be the sum of the 3 promises. */
	}

	asyncTime(); // Execution Time: 9 seconds;

	const promisesTime = async () => {
		const response = await Promise.all([
			new Promise(resolve => setTimeout(() => resolve(1), 3000)),
			new Promise(resolve => setTimeout(() => resolve(2), 4000)),
			new Promise(resolve => setTimeout(() => resolve(3), 3000)),
		]);
		console.log(response);
		/* unlike of async / await the three requests will be launched in a chain and 
		the resolution time will be not a sum but when all are complete.
		So in this example they will all be resolved in 4 seconds and
		not in 10 if we wait for each request to continue with the other. */
	}

	promisesTime(); // Execution Time: 4 seconds;