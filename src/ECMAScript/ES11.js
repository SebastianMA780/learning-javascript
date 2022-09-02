// featured released 2020

/*  Dynamic import: make imports in runtime */

	export async function dynamicImport() {
		const module = await import('./module-file');
		console.log(module.namedValue);
	}

/* big int: make posible to work with big numbers */

	export const aBigNumber = 98547568967689564765498n;
	export const bBigNumber = BigInt(9854756896768);
	console.log(aBigNumber);
	console.log(bBigNumber);

/* 
	Promise.allSettled: returns a promise that resolves after
	 all of the given promises have either fulfilled or rejected with
		an array of objects.
*/

	const promise1 = new Promise((resolve, reject) => resolve('resolved'));
	const promise2 = new Promise((resolve, reject) => reject('rejected'));
	const promise3 = new Promise((resolve, reject) => resolve('resolved'));

	Promise.allSettled([ promise1, promise2, promise3])
		.then(response => console.log(response)) //{ status , value // reason }[]

/*  globalThis: objecto global , node // web */

	console.log(window); //error in node.
	console.log(globalThis); // works everywhere.

/* nullish: checks for null or undefined, do not check falsy values*/

	const nullish = null ?? 'assign';
	const nullishStr = '' ?? 'assign';
	const nullishFalsy = false ?? 'assign';

	const pipe = null || 'assign'
	const pipeStr = '' || 'assign'
	const pipeFalsy = '' || 'assign'

	console.log({
		nullish,
		nullishStr,
		nullishFalsy,
		pipe,
		pipeStr,
		pipeFalsy
	});

/* 	optional chaining */

	const user = {
		user2: {
			method: () => {
				console.log('execute')
			}
		}
	}
	const name = user?.user1?.name // undefined if user is empty
	console.log(name);
	console.log(user?.user2?.method?.()); // trick for function execution conditional.
	console.log(user?.user2?.otherMethod?.());