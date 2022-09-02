// featured released 2021

/* replace all */

	const str = 'JavaScript is awesome';
	const replacedString = str.replace('JavaScript', 'Python'); //just replace first coincidence
	console.log(replacedString);

	const str2 = 'JavaScript JavaScript JavaScript JavaScript'
	const replacedStringAll = str2.replaceAll('JavaScript', 'Python');
	console.log(replacedStringAll);

/* private  */

	class Message {
		show(val) {
			console.log(val);
		}
	}

	const message =  new Message();
	message.show('it is not private')

	class PrivateMessage {
		#show(val) {
			console.log(val);
		}
	}

	const privateMessage =  new PrivateMessage();
	privateMessage.show('it is private') // error

/* Promise.any: return first promise resolved */

	const promise1 = new Promise((resolve,) => resolve(1));
	const promise2 = new Promise((resolve,) => resolve(2));
	const promise3 = new Promise((resolve,) => resolve(3));

	Promise.any([ promise1, promise2, promise3])
		.then(response => console.log(response)) 

/* weak ref: garbage collector will ignore it. */

	new WeakRef({});

/* logic operator */

	let isTrue = true;
	let isFalse = false;
	let undef = null
	console.log(isTrue &&= 'assign');
	console.log(isTrue ||= 'assign ||');
	console.log(undef ??= isFalse);
	console.log({
		isTrue,
		isFalse,
		undef,
	});

/*  numeric separator */

export const separatedNumber = 1_000_000_000_000; //underscore to separate number digits
console.log(separatedNumber);