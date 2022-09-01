/* 
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

	A promise represents the eventual completion or failure of an asynchronous 
	operation and its resulting value.

*/

//Api-rest
// {
//   "characters": "https://rickandmortyapi.com/api/character",
//   "locations": "https://rickandmortyapi.com/api/location",
//   "episodes": "https://rickandmortyapi.com/api/episode"
// }

function PromiseSintaxis() {
	return new Promise((resolve, reject) => {
		resolve(1);
	})
}

PromiseSintaxis()
	.then( res => console.log(res)) // completion request, data available (handle data)
	.catch(err => console.log(err)) // failure request, error available. (handle error)
	.finally(() => null); /* (handle execution finis)
		finally callback function is executed
		at the end no matter if the promise is rejected or successful.
*/

import fetch from 'node-fetch';

const API = ' https://rickandmortyapi.com/api';
function fetchData(urlApi) { // fetch returns a object Promise
	return fetch(urlApi);
}

fetchData('https://rickandmortyapi.com/api/character')
	.then( res => res.json())
	.then( res => fetchData(`${API}/character/${res.results[0].id}`))
	.then( res => res.json())
	.then( res => console.log(res))
	.catch( err => console.error(err))
	.finally( () => console.log('Execution Finished') ); 
	